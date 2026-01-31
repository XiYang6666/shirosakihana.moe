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

function getOrientation() {
  return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
}

onMounted(() => {
  setRandomBg();
  let lastOrientation = getOrientation();

  window.addEventListener("resize", () => {
    const currentOrientation = getOrientation();
    if (currentOrientation !== lastOrientation) {
      lastOrientation = currentOrientation;
      setRandomBg();
    }
  });
  // window.addEventListener("orientationchange", setRandomBg);
});
</script>
