export default function (isSource?: boolean) {
  const urlString = document.body.style.backgroundImage.match(
    /^url\((['"])(.*?)\1\)$/,
  )?.[2];
  if (!urlString) return undefined;
  const url = new URL(
    `${isSource ? "https://shirosakihana.moe" : ""}${urlString}`,
  );
  const urlParams = new URLSearchParams(url.search);
  return Number(Object.fromEntries(urlParams.entries())["ts"]);
}
