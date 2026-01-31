<template>
  <div>
    <button
      class="flush-bg-button relative bg-zinc-200 bg-opacity-35 rounded-full w-12 h-12 hover:bg-opacity-80 transition-colors duration-700 ease-in-out transform-gpu"
      @click="setRandomBg"
    >
      <div
        class="text-zinc-800 text-xl hover:rotate-[1turn] transition-transform duration-700 ease-in-out transform-gpu"
      >
        <i class="fa-solid fa-arrows-rotate"></i>
      </div>

      <div
        class="tooltip absolute top-0 right-full w-max translate-y-1/2 mr-2 pl-2 pr-2 rounded-full text-zinc-800 text-base whitespace-nowrap invisible bg-zinc-200 opacity-0 bg-opacity-0 pointer-events-none transition-all translate-x-8 duration-500 transform-gpu"
      >
        刷新背景图片
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

let isTransitioning = false;
const toast = useToast();

function setRandomBg() {
  if (isTransitioning) {
    toast.info("点的太快啦!", { timeout: 1500 });
    return;
  }
  isTransitioning = true;
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const url = isPortrait
    ? `/api/randomBg?mobile&ts=${Date.now()}`
    : `/api/randomBg?ts=${Date.now()}`;

  document.body.style.setProperty("--after-background", `url('${url}')`);
  document.body.classList.add("bg-in");
  document.body.style.setProperty("--after-opacity", "1");

  setTimeout(() => {
    document.body.style.backgroundImage = `url('${url}')`;
    document.body.classList.remove("bg-in");
    document.body.style.setProperty("--after-opacity", "0");
    isTransitioning = false;
  }, 1000);
}
</script>

<style lang="scss">
.flush-bg-button:hover .tooltip {
  @apply visible bg-opacity-35 opacity-100 translate-x-0;
}

body::after {
  content: "";
  @apply pointer-events-none;
  @apply bg-cover bg-center bg-fixed;
  @apply fixed top-0 left-0 right-0 bottom-0;
  @apply -z-10;
  background-image: var(--after-background);
  opacity: var(--after-opacity, 0);
}
body::after.bg-in {
  @apply transition-opacity duration-1000 ease-in-out;
}
</style>
