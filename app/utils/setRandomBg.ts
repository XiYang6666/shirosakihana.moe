export default function setRandomBg() {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const url = isPortrait
    ? `/api/randomBg?mobile&ts=${Date.now()}`
    : `/api/randomBg?ts=${Date.now()}`;

  document.body.style.backgroundImage = `url('${url}')`;
}
