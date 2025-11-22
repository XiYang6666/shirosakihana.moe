import fs from "fs";
import { randomInt } from "crypto";

export default defineEventHandler((event) => {
  const is_mobile = "mobile" in getQuery(event);
  const base_path = is_mobile ? "/bg/mobile/" : "/bg/pc/";
  const imgList = fs.readdirSync(`public${base_path}`);
  const imgName = imgList[randomInt(imgList.length)];
  return sendRedirect(event, `${base_path}${imgName}`, 307);
});
