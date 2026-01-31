<template>
  <main>
    <div
      class="bg-zinc-200 w-[450px] max-w-[86vw] h-[230px] rounded-2xl bg-opacity-35 flex items-center justify-center flex-col"
    >
      <span class="text-2xl text-zinc-800 font-bold line-through"
        >我才不是什么萝莉控</span
      >

      <hr class="w-5/6 border-gray-900 m-5" />

      <ClientOnly>
        <!-- 只在浏览器检查,避免服务器客户端时区不同步的问题 -->
        <span
          class="text-xl text-pink-500 font-bold mb-2"
          v-if="checkBirthday()"
          >🎂 小花生日快乐 🎂</span
        >
      </ClientOnly>

      <span
        v-for="[name, link] of Object.entries(links)"
        class="text-base text-zinc-700"
      >
        <a :href="link">{{ name }}</a>
      </span>
    </div>
  </main>

  <div class="music absolute top-1 right-1">
    <iframe
      frameborder="no"
      width="330"
      height="86"
      src="//music.163.com/outchain/player?type=2&id=1348722587&auto=0&height=66"
    ></iframe>
  </div>
</template>

<script lang="ts" setup>
import JSConfetti from "js-confetti";

definePageMeta({
  layout: "home",
});
useSeoMeta({
  title: "小花可爱 n(*≧▽≦*)n",
  description: "一个简单的白咲花粉丝站 / A simple Hana Shirasaki fan site",
});
useScriptNpm({
  packageName: "js-confetti",
  file: "dist/js-confetti.browser.js",
  version: "0.12.0",
});
onMounted(() => {
  if (checkBirthday()) {
    const confetti = new JSConfetti();
    confetti.addConfetti();
  }
});

const config = useRuntimeConfig();
const links = config.public.links;
</script>
