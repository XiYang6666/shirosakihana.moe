// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/scripts"],
  css: ["assets/main.scss", "assets/transition.scss","assets/text-shadow.scss"],
  extends: ["../../packages/shared"],
  app: {
    pageTransition: {
      name: "fade-blur",
      mode: "out-in",
    },
    layoutTransition: {
      name: "fade-blur",
      mode: "out-in",
    },
  },
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
