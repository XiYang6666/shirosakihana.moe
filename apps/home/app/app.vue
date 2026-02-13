<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
  <BackgroundTransition :is-source="true" />
</template>

<script lang="ts" setup>
import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<style>
body {
  @apply select-none;
}
</style>
