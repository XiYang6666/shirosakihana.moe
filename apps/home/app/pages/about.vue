<template>
  <PostBase title="关于">
    <p class="text-zinc-800">
      一个简单的白咲花粉丝站，由
      <NuxtLink href="https://xiyang6666.top" target="_blank">
        @XiYang6666
      </NuxtLink>
      运营.
      <br />
      <NuxtLink
        href="https://github.com/XiYang6666/shirosakihana.moe"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i> Github 仓库
      </NuxtLink>
    </p>

    <p class="mt-4">图片素材来源:</p>
    <ul class="mt-2 pl-6">
      <li>
        <NuxtLink
          href="https://www.bilibili.com/bangumi/play/ss26291"
          target="_blank"
        >
          番剧截图
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          href="https://gelbooru.com/index.php?page=post&s=list&tags=shirosaki_hana"
          target="_blank"
        >
          Gelbooru
        </NuxtLink>
      </li>
      <li>
        <NuxtLink href="https://space.bilibili.com/457053240" target="_blank">
          Bilibili(@帕喵ネコ)
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          href="https://github.com/CompVis/stable-diffusion"
          target="_blank"
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
