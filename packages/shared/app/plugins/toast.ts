import Toast from "vue-toastification";

export default defineNuxtPlugin((app) => {
  app.vueApp.use(Toast, {
    position: "bottom-left",
  });
});
