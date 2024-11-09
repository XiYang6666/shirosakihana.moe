import fs from "fs";
import { randomInt } from "crypto";

const config = useRuntimeConfig();

export default defineEventHandler((event) => {
  if (config.imageHosting) {
    const imgList: string[] = config.imageLinks;
    const imgLink = imgList[randomInt(imgList.length)];
    return sendRedirect(event, imgLink);
  } else {
    const imgList = fs.readdirSync("public/backgrounds");
    const imgName = imgList[randomInt(imgList.length)];
    return sendRedirect(event, `/backgrounds/${imgName}`);
  }
});
