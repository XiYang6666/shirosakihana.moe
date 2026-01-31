<template>
  <IosCompatBody>
    <div class="w-dvw min-h-dvh overflow-hidden flex items-center flex-col">
      <slot />
      <footer class="text-center">
        <span class="text-lg text-pink-400 font-base" v-html="footer"></span>
      </footer>
    </div>
  </IosCompatBody>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const footer = config.public.footer;
</script>
