import getBgUrl from "./getBgUrl";

export default function (isSource?: boolean) {
  const url = getBgUrl(isSource);
  document.body.style.backgroundImage = `url('${url}')`;
}
