<template>
  <div class="bg h-dvh w-dvw overflow-hidden flex items-center justify-center flex-col">
    <div
      class="content bg-white w-[450px] max-w-[86vw] h-[230px] rounded-2xl bg-opacity-35 flex items-center justify-center flex-col">
      <span class="text-2xl text-zinc-800 font-bold line-through">我才不是什么萝莉控</span>

      <hr class="w-5/6 border-gray-900 m-5" />

      <span class="text-xl text-pink-500 font-bold mb-2" v-if="isBirthday">今天是小花的生日哦</span>

      <span v-for="[name, link] of Object.entries(links)" class="text-base text-zinc-700">
        <a :href="link">{{ name }}</a>
      </span>
    </div>

    <span class="footer fixed bottom-4 text-lg text-pink-400 font-base text-center" v-html="footer"></span>
  </div>

  <div class="music absolute top-1 right-1">
    <iframe frameborder="no" width="330" height="86"
      src="//music.163.com/outchain/player?type=2&id=1348722587&auto=0&height=66"></iframe>
  </div>
</template>

<script lang="ts" setup>
import JSConfetti from "js-confetti";

useHead({
  title: "小花可爱 n(*≧▽≦*)n",
  link: [
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
  ],
});
useScriptNpm({
  packageName: "js-confetti",
  file: "dist/js-confetti.browser.js",
  version: "0.12.0",
});

const checkBirthday = () => {
  const today = new Date();
  const targetMonth = 3;
  const targetDay = 7;
  return today.getMonth() + 1 === targetMonth && today.getDate() === targetDay;
};
const isBirthday = checkBirthday();

onMounted(() => {
  if (import.meta.client) {
    const confetti = new JSConfetti();
    if (isBirthday) {
      confetti.addConfetti();
    }
  }
});

const links = {
  Github: "https://github.com/XiYang6666/shirosakihana.moe",
  镜像站: "https://mirror.shirosakihana.moe",
  随机小花图片: "https://shirosakihana.moe/api/randomHana",
};
const footer = `<a href="https://icp.gov.moe/?keyword=20250307" target="_blank">萌ICP备20250307号</a>`;
</script>
