import { UAParser } from "ua-parser-js";

export function useBgMode() {
  const bgMode = useState<"fixed" | "div">("bgMode", () => {
    // return "div";
    if (!import.meta.server) return "fixed";

    const headers = useRequestHeaders();
    const ua = headers["user-agent"] || "";
    const parser = new UAParser(ua);
    const result = parser.getResult();
    return result.browser.is("Safari") ? "div" : "fixed"; // Fuck the fucking Safari Broser
  });

  return bgMode;
}
