<template>
  <div class="w-dvw overflow-hidden flex items-center flex-col">
    <slot />
    <footer class="text-center">
      <span class="text-lg text-pink-400 font-base" v-html="footer"></span>
    </footer>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const footer = config.public.footer;
</script>
