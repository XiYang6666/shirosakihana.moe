<template>
  <main
    class="bg-zinc-100 w-[30rem] max-w-[95%] p-6 rounded-[3rem] bg-opacity-30 border-2 border-zinc-100 shadow flex items-center justify-center flex-col text-zinc-800"
  >
    <nav class="flex flex-row gap-3 mb-4">
      <a
        v-for="[name, href] in Object.entries(links)"
        :href="href"
        class="text-lg font-bold text-center bg-zinc-100 hover:bg-zinc-300 transition-colors duration-200 bg-opacity-50 w-20 rounded-full border-zinc-400 border-2"
      >
        {{ name }}
      </a>
    </nav>

    <img
      src="/avatar.webp"
      class="w-32 h-32 rounded-full border-zinc-300 border-4"
    />

    <h1 class="text-2xl text-center font-bold mt-6">
      <ruby>白咲<rt>しろさき</rt> 花<rt>はな</rt></ruby>
    </h1>

    <h1 class="text-sm text-center uppercase tracking-widest mb-4">
      Shirosaki Hana
    </h1>

    <ClientOnly>
      <span v-if="checkBirthday()" class="text-xl text-pink-500 font-bold mb-4">
        🎂 小花生日快乐 🎂
      </span>
    </ClientOnly>

    <div
      class="flex flex-col p-4 mb-4 justify-center w-4/5 rounded-lg bg-zinc-100 bg-opacity-40"
    >
      <span class="font-bold">基本资料</span>
      <table>
        <thead>
          <tr>
            <td class="w-10"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>生日:</td>
            <td>3月7日</td>
          </tr>
          <tr>
            <td>身高:</td>
            <td>142.3cm</td>
          </tr>
          <tr>
            <td>血型:</td>
            <td>A型</td>
          </tr>
        </tbody>
      </table>
    </div>

    <span class="text-xl">小花世界第一可爱!</span>
  </main>

  <div class="music absolute top-1 right-1">
    <iframe
      frameborder="no"
      width="330"
      height="86"
      src="https://music.163.com/outchain/player?type=2&id=1348722587&auto=0&height=66"
    ></iframe>
  </div>
</template>

<script lang="ts" setup>
import JSConfetti from "js-confetti";

const links = {
  关于: "/about",
  画廊: "/api/randomHana",
  留言: "/guestbook",
  镜像: "https://mirror.shirosakihana.moe",
};

definePageMeta({
  layout: "home",
});
useSeoMeta({
  title: "小花可爱 n(*≧▽≦*)n",
  description: "一个简单的白咲花粉丝站 / A simple Hana Shirosaki fan site",
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
</script>

<style></style>
