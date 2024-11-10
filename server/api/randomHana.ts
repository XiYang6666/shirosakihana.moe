import fs from "fs";
import { randomInt } from "crypto";

export default defineEventHandler((event) => {
  const imgList = fs.readdirSync("public/hana");
  const imgName = imgList[randomInt(imgList.length)];
  return sendRedirect(event, `/hana/${imgName}`);
});
