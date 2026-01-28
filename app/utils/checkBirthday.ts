export default function checkBirthday() {
  const config = useRuntimeConfig();
  const today = new Date();
  const birthday: [number, number] = config.public.birthday
    .split(".")
    .map((x) => Number(x)) as [number, number];
  return (
    today.getMonth() + 1 === birthday[0] && today.getDate() === birthday[1]
  );
}
