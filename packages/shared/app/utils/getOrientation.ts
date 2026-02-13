export default function () {
  if (import.meta.server) return "landscape";

  return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
}
