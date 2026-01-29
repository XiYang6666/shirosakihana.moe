// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/scripts"],
  css: ["assets/style.scss"],

  runtimeConfig: {
    public: {
      walineServerUrl: "https://shirosakihana.moe/waline-api/",
      walineTurnstileKey: "0x4AAAAAACVYAYnvIgenA4luSlnjoHwyZL0",
      links: {
        留言板: "/guestbook",
        随机小花图片: "https://shirosakihana.moe/api/randomHana",
        镜像站: "https://mirror.shirosakihana.moe",
        Github: "https://github.com/XiYang6666/shirosakihana.moe",
      },
      footer:
        '<a href="https://icp.gov.moe/?keyword=20250307" target="_blank">萌ICP备20250307号</a>',
      birthday: "3.7",
    },
  },
});
