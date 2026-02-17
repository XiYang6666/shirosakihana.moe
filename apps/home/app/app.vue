<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
  <BackgroundTransition :is-source="true" />
</template>

<script setup lang="ts">
const baseTitle = "小花可爱 n(*≧▽≦*)n";
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${baseTitle} | ${titleChunk}` : baseTitle,
});
</script>

<style>
body {
  @apply select-none;
}
</style>
