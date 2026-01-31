<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
  <RefreshBackgroundButton
    class="fixed right-2 bottom-2"
  ></RefreshBackgroundButton>
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
