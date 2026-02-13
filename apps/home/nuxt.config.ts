// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/scripts"],
  css: ["assets/main.scss"],
  extends: ["../../packages/shared"],
  routeRules: {
    "/": {
      swr: true,
    },
    "/about": {
      swr: true,
    },
    "/guestbook": {
      swr: true,
    },
  },
  runtimeConfig: {
    public: {
      walineServerUrl: "https://shirosakihana.moe/waline-api/",
      walineTurnstileKey: "0x4AAAAAACVYAdLHyHTKSbgQ",
      footer:
        '<a href="https://icp.gov.moe/?keyword=20250307" target="_blank">萌ICP备20250307号</a>',
    },
  },
});
