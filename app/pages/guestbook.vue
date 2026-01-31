<template>
  <div
    class="w-10/12 m-8 p-8 bg-zinc-400 bg-opacity-20 flex flex-col items-center rounded-xl"
  >
    <h1 class="text-zinc-800 text-3xl font-bold text-center">留言板</h1>
    <a href="/" class="mt-3 mb-1 text-zinc-800 text-base text-center">
      返回主页
    </a>
    <WalineComponent class="w-10/12"></WalineComponent>
    <p v-if="isDev" v-for="i of 100">awa</p>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "小花可爱 n(*≧▽≦*)n | 留言板",
});
const isDev = useState(() => import.meta.dev);
</script>
