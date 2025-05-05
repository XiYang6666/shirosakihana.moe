const allowedOrigins = [
  /https:\/\/download.docker.com\/linux\/.*\/gpg\/?/,
  /https:\/\/get.docker.com\/?/,
];

export default defineEventHandler(async (event) => {
  const url = event.path.slice(1);
  if (!allowedOrigins.some((origin) => origin.test(url))) {
    return;
  }
  const response = await fetch(url);
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
});
