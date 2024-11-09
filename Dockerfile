FROM node:20-slim

WORKDIR /app
COPY .output .

EXPOSE 3000

ENTRYPOINT [ "node" ,"server/index.mjs" ]