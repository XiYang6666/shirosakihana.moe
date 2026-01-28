<template>
  <div
    class="w-dvw overflow-hidden flex justify-center flex-col"
  >
    <slot />

    <footer>
      <span class="text-lg text-pink-400 font-base" v-html="footer"></span>
    </footer>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const footer = config.public.footer;
</script>
