<template>
  <div class="fixed right-2 bottom-2">
    <button
      class="flush-bg-button relative bg-zinc-200 bg-opacity-35 dark:bg-opacity-60 rounded-full w-12 h-12 hover:bg-opacity-80 transition-colors duration-700 ease-in-out transform-gpu"
      :class="darkClass('dark:bg-zinc-800 dark:hover:bg-zinc-700')"
      @click="() => setRandomBg()"
    >
      <div
        class="text-zinc-800 text-xl hover:rotate-[1turn] transition-transform duration-700 ease-in-out transform-gpu"
        :class="darkClass('dark:text-zinc-500')"
      >
        <i class="fa-solid fa-arrows-rotate"></i>
      </div>

      <div
        class="tooltip absolute top-0 right-full w-max translate-y-1/2 mr-2 pl-2 pr-2 rounded-full text-zinc-800 text-base whitespace-nowrap invisible bg-zinc-200 opacity-0 bg-opacity-0 pointer-events-none transition-all translate-x-8 duration-500 transform-gpu"
        :class="darkClass('dark:text-zinc-500 dark:bg-zinc-800')"
      >
        刷新背景图片
      </div>
    </button>
  </div>

  <div ref="bgRef" id="safari-bg" />
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";

const props = defineProps({
  isSource: Boolean,
  supportDark: Boolean,
});

// utils

function darkClass(classes: string) {
  return props.supportDark ? classes : "";
}

function getBgElement() {
  const divBgElement = document.getElementById("safari-bg");
  return isSafari() && divBgElement ? divBgElement : document.body;
}

function buildBgUrl(isSource?: boolean, filterTs?: number) {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const url = isPortrait
    ? `${isSource ? "" : "https://shirosakihana.moe"}/api/randomBg?mobile&ts=${Date.now()}${filterTs ? `&filter=${filterTs}` : ""}`
    : `${isSource ? "" : "https://shirosakihana.moe"}/api/randomBg?ts=${Date.now()}${filterTs ? `&filter=${filterTs}` : ""}`;
  return url;
}

function getCurrentBgTs(isSource?: boolean) {
  const urlString = getBgElement().style.backgroundImage.match(
    /^url\((['"])(.*?)\1\)$/,
  )?.[2];
  if (!urlString) return undefined;
  const url = new URL(
    `${isSource ? "https://shirosakihana.moe" : ""}${urlString}`,
  );
  const urlParams = new URLSearchParams(url.search);
  return Number(Object.fromEntries(urlParams.entries())["ts"]);
}

//

const toast = useToast();
let isTransitioning = false;
let lastOrientation = getOrientation();
let currentController: AbortController | undefined;

function resetTransitionState() {
  const bgElement = getBgElement();
  bgElement.classList.remove("bg-in");
  bgElement.style.setProperty("--after-opacity", "0");
}

async function setRandomBg(wait: boolean = true) {
  if (wait && isTransitioning) {
    toast.info("点的太快啦!", { timeout: 1500 });
    return;
  }
  if (wait) isTransitioning = true;

  const bgElement = getBgElement();
  const controller = new AbortController();
  const signal = controller.signal;
  if (currentController) {
    currentController.abort();
    resetTransitionState();
  }
  currentController = controller;

  try {
    const currentTs = getCurrentBgTs(props.isSource);
    const url = buildBgUrl(props.isSource, currentTs);
    console.log(url);

    await preloadImage(url, signal);
    bgElement.style.setProperty("--after-background", `url('${url}')`);
    bgElement.classList.add("bg-in");
    bgElement.style.setProperty("--after-opacity", "1");
    await sleep(1000, signal);
    bgElement.style.backgroundImage = `url('${url}')`;
    resetTransitionState();
  } catch (e) {
    if (signal.aborted) return;
    throw e;
  } finally {
    if (wait) isTransitioning = false;
  }
}

function onResize() {
  const currentOrientation = getOrientation();
  if (currentOrientation !== lastOrientation) {
    lastOrientation = currentOrientation;
    setRandomBg(false);
  }
}

onMounted(() => {
  const bgElement = getBgElement();
  if (isSafari()) {
    bgElement.style.setProperty("display", "block");
  }
  const url = buildBgUrl(props.isSource);
  getBgElement().style.backgroundImage = `url('${url}')`;
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
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

#safari-bg {
  @apply bg-cover bg-center bg-fixed;
  @apply fixed top-0 h-dvh left-0 right-0;
  @apply -z-10;
  transform: translateZ(0);
  display: none;
}

#safari-bg::after {
  content: "";
  @apply pointer-events-none;
  @apply bg-cover bg-center bg-fixed;
  @apply fixed top-0 left-0 right-0 bottom-0;
  @apply -z-10;
  background-image: var(--after-background);
  opacity: var(--after-opacity, 0);
  transform: translateZ(0);
}
#safari-bg::after.bg-in {
  @apply transition-opacity duration-1000 ease-in-out;
}
</style>
