<template>
  <div>
    <button
      class="flush-bg-button relative bg-zinc-200 bg-opacity-35 dark:bg-zinc-800 dark:bg-opacity-50 rounded-full w-12 h-12 hover:bg-opacity-80 dark:hover:bg-zinc-700 transition-colors duration-700 ease-in-out transform-gpu"
      @click="setRandomBg"
    >
      <div
        class="text-zinc-800 dark:text-zinc-500 text-xl hover:rotate-[1turn] transition-transform duration-700 ease-in-out transform-gpu"
      >
        <i class="fa-solid fa-arrows-rotate"></i>
      </div>

      <div
        class="tooltip absolute top-0 right-full w-max translate-y-1/2 mr-2 pl-2 pr-2 rounded-full text-zinc-800 dark:text-zinc-500 text-base whitespace-nowrap invisible bg-zinc-200 dark:bg-zinc-800 opacity-0 bg-opacity-0 pointer-events-none transition-all translate-x-8 duration-500 transform-gpu"
      >
        刷新背景图片
      </div>
    </button>
  </div>
</template>

<style lang="scss">
.flush-bg-button:hover .tooltip {
  @apply visible bg-opacity-35 dark:bg-opacity-50 opacity-100 translate-x-0;
}
</style>
