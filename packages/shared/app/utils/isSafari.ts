export default function () {
  // return true;
  const ua = navigator.userAgent;
  return /Safari/.test(ua);
}
