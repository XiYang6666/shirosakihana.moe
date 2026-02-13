<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
  <BackgroundTransition :is-source="true" />
</template>

<style>
body {
  @apply select-none;
}
</style>
