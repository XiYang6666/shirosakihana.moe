export default function () {
  const isMobile = window.matchMedia("(orientation: portrait)").matches;
  const url = isMobile
    ? `https://shirosakihana.moe/api/randomBg?mobile&ts=${Date.now()}`
    : `https://shirosakihana.moe/api/randomBg?ts=${Date.now()}`;

  document.body.style.backgroundImage = `url('${url}')`;
}
