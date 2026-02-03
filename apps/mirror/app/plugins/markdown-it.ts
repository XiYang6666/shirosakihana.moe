import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import GithubSlugger from "github-slugger";
import hljs from "highlight.js";

export default defineNuxtPlugin((nuxtApp) => {
  const slugger = new GithubSlugger();
  const md = new MarkdownIt({
    html: true, // 允许 HTML 标签
    linkify: true, // 自动转换链接
    typographer: true, // 优化排版
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (error) {
          console.error("Highlight Error:", error);
        }
      }
      return "";
    },
  });

  md.use(anchor, {
    level: [1, 2, 3, 4, 5, 6],
    slugify: (s: string) => slugger.slug(s),
    permalink: anchor.permalink["linkInsideHeader"]({
      class: "header-anchor",
      symbol: "¶",
    }),
  });

  return { provide: { md } };
});
