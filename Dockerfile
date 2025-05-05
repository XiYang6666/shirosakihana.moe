FROM node:22-slim

WORKDIR /app
COPY .output .
COPY README.md .

EXPOSE 3000

ENTRYPOINT [ "node" ,"server/index.mjs" ]