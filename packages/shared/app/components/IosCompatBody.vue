<template>
  <!-- Fuck the fucking Safari Browser -->
  <template v-if="bgMode == 'div'">
    <div id="bg">
      <slot />
    </div>
  </template>
  <template v-else>
    <slot />
  </template>
</template>

<script setup lang="ts">
const bgMode = useBgMode();
console.debug(bgMode.value == "fixed" ? "Not Safari" : "Is Safari");
</script>

<style lang="scss">
#bg {
  @apply h-dvh w-full;
  @apply overflow-x-hidden overflow-y-auto;
}
</style>
