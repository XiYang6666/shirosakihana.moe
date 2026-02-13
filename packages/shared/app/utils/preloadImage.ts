export default function (url: string, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve();
    img.onerror = reject;

    if (signal) {
      signal.addEventListener("abort", () => {
        reject();
      });
    }
  });
}
