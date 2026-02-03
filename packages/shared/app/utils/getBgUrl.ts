export default function (isSource?: boolean, filterTs?: number) {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const url = isPortrait
    ? `${isSource ? "" : "https://shirosakihana.moe"}/api/randomBg?mobile&ts=${Date.now()}${filterTs ? `&filter=${filterTs}` : ""}`
    : `${isSource ? "" : "https://shirosakihana.moe"}/api/randomBg?ts=${Date.now()}${filterTs ? `&filter=${filterTs}` : ""}`;
  return url;
}
