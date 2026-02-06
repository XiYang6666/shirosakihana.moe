declare type Timing = {
  start: number;
  marks: { name: string; time: number }[];
};

export default defineNitroPlugin((app) => {
  app.hooks.hook("request", (event) => {
    event.context._timing = {
      start: performance.now(),
      marks: [],
    };
  });
  app.hooks.hook("render:before", ({ event }) => {
    event.context._timing.marks.push({
      name: "prepare",
      time: performance.now(),
    });
  });
  app.hooks.hook("render:response", (response, { event }) => {
    event.context._timing.marks.push({
      name: "render",
      time: performance.now(),
    });
  });
  app.hooks.hook("beforeResponse", (event) => {
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
