export default function () {
  const config = useRuntimeConfig();
  const today = new Date();
  return today.getMonth() + 1 === 3 && today.getDate() === 7;
}
