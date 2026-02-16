<template>
  <div
    class="content w-dvw h-dvh overflow-hidden flex items-center justify-center flex-col mx-auto"
  >
    <slot />

    <footer class="fixed bottom-4">
      <span class="text-lg text-pink-400 font-base" v-html="footer"></span>
    </footer>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const footer = config.public.footer;

useHead({
  bodyAttrs: {
    class: ["overflow-hidden"],
  },
});
</script>
