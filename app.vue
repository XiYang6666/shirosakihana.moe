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

    <span class="footer fixed bottom-4 text-lg text-zinc-400 font-thin text-center" v-html="footer"></span>

  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "小花可爱 n(*≧▽≦*)n",
  link: [
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
  ],
});

const links = {
  主页: "https://xiyang6666.top",
  Github: "https://github.com/XiYang6666",
  镜像站: "https://mirror.shirosakihana.moe",
  随机小花图片: "https://shirosakihana.moe/api/randomHana",
};
const footer = `<a href="https://icp.gov.moe/?keyword=20250307" target="_blank">萌ICP备20250307号</a>`
</script>
