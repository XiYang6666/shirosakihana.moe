// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/scripts"],
  css: ["assets/style.scss"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  vite: {
    ssr: {
      noExternal: ["vue-toastification"],
    },
  },
});
