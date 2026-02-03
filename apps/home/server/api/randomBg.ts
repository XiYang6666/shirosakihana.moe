import fs from "fs";
import { randomInt } from "crypto";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 3600 });

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const ts = Number(query.ts);
  const filter = Number(query.filter);
  const filteredName = cache.get<string>(filter);

  const is_mobile = "mobile" in getQuery(event);
  const base_path = is_mobile ? "/bg/mobile/" : "/bg/pc/";
  const imgList = fs
    .readdirSync(`public${base_path}`)
    .filter((x) => x != filteredName);
  const imgName = imgList[randomInt(imgList.length)];

  if (ts) cache.set(ts, imgName);
  return sendRedirect(event, `${base_path}${imgName}`, 307);
});
