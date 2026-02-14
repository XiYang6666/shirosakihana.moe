<template>
  <div
    class="w-10/12 m-8 p-8 bg-zinc-100 bg-opacity-30 shadow flex flex-col rounded-xl items-center"
  >
    <h1 class="text-zinc-800 text-3xl font-bold text-center">留言板</h1>
    <NuxtLink href="/" class="mt-3 mb-1 text-zinc-800 text-base text-center">
      返回主页
    </NuxtLink>
    <WalineComponent class="w-10/12"></WalineComponent>
    <DevOnly>
      <p v-for="i of 100">awa</p>
    </DevOnly>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "小花可爱 n(*≧▽≦*)n | 留言板",
});
</script>
