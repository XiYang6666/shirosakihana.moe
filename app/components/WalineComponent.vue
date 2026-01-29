<template>
  <ClientOnly>
    <Waline
      :serverURL="serverURL"
      :turnstileKey="walineTurnstileKey"
      :path="path"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { Waline } from "@waline/client/component";
import "@waline/client/waline.css";

const config = useRuntimeConfig();

const serverURL = config.public.walineServerUrl;
const walineTurnstileKey = config.public.walineTurnstileKey;

const path = computed(() => useRoute().path);

console.debug(path);
</script>
