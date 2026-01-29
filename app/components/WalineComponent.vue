<template>
  <ClientOnly>
    <Waline
      :serverURL="serverURL"
      :turnstileKey="turnstileKey"
      :path="path"
      login="disable"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { Waline } from "@waline/client/component";
import "@waline/client/waline.css";

const config = useRuntimeConfig();

const serverURL = config.public.walineServerUrl;
const turnstileKey = config.public.walineTurnstileKey;

const path = computed(() => useRoute().path);

console.debug(path);
</script>
