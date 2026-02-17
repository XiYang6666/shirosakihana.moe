<template>
  <div
    class="w-10/12 m-8 p-8 bg-zinc-100 bg-opacity-30 shadow flex flex-col items-center rounded-xl"
  >
    <main class="prose prose-xl w-full text-zinc-800 flex flex-col">
      <h1 class="text-zinc-800 text-3xl font-bold self-center">{{ title }}</h1>
      <NuxtLink href="/" class="mb-1 self-center"> 返回主页 </NuxtLink>
      <hr class="w-full my-4 border-zinc-700 self-center" />

      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps({
  title: String,
});
</script>
