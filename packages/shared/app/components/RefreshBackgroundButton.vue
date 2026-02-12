<template>
  <div class="fixed right-2 bottom-2">
    <button
      class="flush-bg-button relative bg-zinc-200 bg-opacity-35 dark:bg-opacity-60 rounded-full w-12 h-12 hover:bg-opacity-80 transition-colors duration-700 ease-in-out transform-gpu"
      :class="getDarkClass('dark:bg-zinc-800 dark:hover:bg-zinc-700')"
      @click="setRandomBg"
    >
      <div
        class="text-zinc-800 text-xl hover:rotate-[1turn] transition-transform duration-700 ease-in-out transform-gpu"
        :class="getDarkClass('dark:text-zinc-500')"
      >
        <i class="fa-solid fa-arrows-rotate"></i>
      </div>

      <div
        class="tooltip absolute top-0 right-full w-max translate-y-1/2 mr-2 pl-2 pr-2 rounded-full text-zinc-800 text-base whitespace-nowrap invisible bg-zinc-200 opacity-0 bg-opacity-0 pointer-events-none transition-all translate-x-8 duration-500 transform-gpu"
        :class="getDarkClass('dark:text-zinc-500 dark:bg-zinc-800')"
      >
        刷新背景图片
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

const props = defineProps({
  isSource: Boolean,
  supportDark: Boolean,
});
const getDarkClass = (classes: string) => (props.supportDark ? classes : "");

let isTransitioning = false;
const toast = useToast();

function setRandomBg() {
  (async () => {
    if (isTransitioning) {
      toast.info("点的太快啦!", { timeout: 1500 });
      return;
    }
    isTransitioning = true;
    const currentTs = getCurrentBgTs(props.isSource);
    const url = getBgUrl(props.isSource, currentTs);

    await new Promise((resolve) => setTimeout(resolve, 100));
    getBgElement().style.setProperty("--after-background", `url('${url}')`);
    getBgElement().classList.add("bg-in");
    getBgElement().style.setProperty("--after-opacity", "1");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    getBgElement().style.backgroundImage = `url('${url}')`;
    getBgElement().classList.remove("bg-in");
    getBgElement().style.setProperty("--after-opacity", "0");
    isTransitioning = false;
  })();
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
