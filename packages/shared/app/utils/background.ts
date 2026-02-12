export function isSafari() {
  // return true;
  const ua = navigator.userAgent;
  return /Safari/.test(ua);
}

export function getBgElement() {
  const divBgElement = document.getElementById("safari-bg");
  return isSafari() && divBgElement ? divBgElement : document.body;
}

export function getBgUrl(isSource?: boolean, filterTs?: number) {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const url = isPortrait
    ? `${isSource ? "" : "https://shirosakihana.moe"}/api/randomBg?mobile&ts=${Date.now()}${filterTs ? `&filter=${filterTs}` : ""}`
    : `${isSource ? "" : "https://shirosakihana.moe"}/api/randomBg?ts=${Date.now()}${filterTs ? `&filter=${filterTs}` : ""}`;
  return url;
}

export function getCurrentBgTs(isSource?: boolean) {
  const urlString = getBgElement().style.backgroundImage.match(
    /^url\((['"])(.*?)\1\)$/,
  )?.[2];
  if (!urlString) return undefined;
  const url = new URL(
    `${isSource ? "https://shirosakihana.moe" : ""}${urlString}`,
  );
  const urlParams = new URLSearchParams(url.search);
  return Number(Object.fromEntries(urlParams.entries())["ts"]);
}

export function setupBg(isSource?: boolean) {
  const url = getBgUrl(isSource);
  getBgElement().style.backgroundImage = `url('${url}')`;
}
