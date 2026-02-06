import type { H3Event } from "h3";

declare type Timing = {
  start: number;
  marks: { name: string; time: number }[];
};

function addMark(event: H3Event, name: string) {
  const timing: Timing | undefined = event.context._timing;
  if (!timing) return;
  timing.marks.push({ name, time: performance.now() });
}

export default defineNitroPlugin((app) => {
  app.hooks.hook("request", (event) => {
    event.context._timing = {
      start: performance.now(),
      marks: [],
    };
  });
  app.hooks.hook("render:before", ({ event }) => addMark(event, "prepare"));
  app.hooks.hook("render:response", (response, { event }) =>
    addMark(event, "render"),
  );
  app.hooks.hook("beforeResponse", (event) => {
    addMark(event, "finalize");
    const timing: Timing | undefined = event.context._timing;
    if (!timing) return;

    let lastTime = timing.start;
    const timingHeader = timing.marks
      .map((mark) => {
        const duration = mark.time - lastTime;
        return `${mark.name};dur=${duration}`;
      })
      .join(",");
    setHeader(event, "Server-Timing", timingHeader);
  });
});
