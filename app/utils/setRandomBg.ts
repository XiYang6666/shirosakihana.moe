export default function setRandomBg() {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const url = isPortrait
    ? `https://shirosakihana.moe/api/randomBg?mobile&ts=${Date.now()}`
    : `https://shirosakihana.moe/api/randomBg?ts=${Date.now()}`;

  document.body.style.backgroundImage = `url('${url}')`;
}
