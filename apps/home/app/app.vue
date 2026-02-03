<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
  <RefreshBackgroundButton :is-source="true" />
</template>

<script lang="ts" setup>
import "@fortawesome/fontawesome-free/css/all.min.css";

const bgMode = useBgMode();

function getOrientation() {
  return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
}

onMounted(() => {
  setupBg();
  let lastOrientation = getOrientation();

  window.addEventListener("resize", () => {
    const currentOrientation = getOrientation();
    if (currentOrientation !== lastOrientation) {
      lastOrientation = currentOrientation;
      setupBg();
    }
  });
  // window.addEventListener("orientationchange", setRandomBg);
});
</script>

<style>
body {
  @apply select-none;
}
</style>
