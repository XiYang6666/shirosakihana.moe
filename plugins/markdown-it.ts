import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

export default defineNuxtPlugin((nuxtApp) => {
  const md = new MarkdownIt({
    html: true, // 允许 HTML 标签
    linkify: true, // 自动转换链接
    typographer: true, // 优化排版
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (error) {
          console.error("代码高亮错误:", error);
        }
      }
      return "";
    },
  });

  return { provide: { md } };
});
