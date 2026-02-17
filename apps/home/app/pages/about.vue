<template>
  <PostBase title="关于">
    <p class="text-zinc-800">
      一个简单的白咲花粉丝站，由
      <NuxtLink
        href="https://github.com/XiYang6666"
        class="underline font-bold"
      >
        @XiYang6666
      </NuxtLink>
      运营
    </p>

    <p class="mt-4">图片素材来源:</p>
    <ul class="mt-2 pl-6">
      <li>
        <NuxtLink
          class="underline"
          href="https://www.bilibili.com/bangumi/play/ss26291"
        >
          番剧截图
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="underline"
          href="https://gelbooru.com/index.php?page=post&s=list&tags=shirosaki_hana"
        >
          Gelbooru
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="underline" href="https://space.bilibili.com/457053240">
          Bilibili(@帕喵ネコ)
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="underline"
          href="https://github.com/CompVis/stable-diffusion"
        >
          Stable Diffusion
        </NuxtLink>
      </li>
    </ul>
  </PostBase>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "关于",
});
</script>
