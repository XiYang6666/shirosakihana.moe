<template>
  <div
    class="bg h-dvh w-dvw overflow-hidden flex items-center justify-center flex-col"
  >
    <div
      class="content bg-white w-[400px] h-[280px] rounded-2xl bg-opacity-35 flex items-center justify-center flex-col"
    >
      <span class="text-2xl text-zinc-800 font-bold">我才不是什么萝莉控</span>

      <hr class="w-5/6 border-gray-900 m-5" />

      <span class="text-base text-zinc-800 mb-4">为什么不看看其他网站呢 </span>

      <span
        v-for="[name, link] of Object.entries(links)"
        class="text-base text-zinc-700"
      >
        <a :href="link">{{ name }}</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = {
  主页: "https://xiyang6666.top",
  Github: "https://github.com/XiYang6666",
  "Docker镜像": "https://docker.shirosakihana.moe",
};
</script>
