<template>
  <NuxtRouteAnnouncer />
  <header>
    <Header></Header>
  </header>

  <NuxtLayout>
    <!-- 占位符 -->
    <div class="w-full h-16"></div>
    <!-- 内容 -->
    <div
      class="w-10/12 m-8 p-8 bg-zinc-200 dark:bg-zinc-950 bg-opacity-60 dark:bg-opacity-50 rounded-xl"
    >
      <div
        class="prose max-w-full dark:prose-invert text-zinc-800 dark:text-zinc-200"
        v-html="$md.render(content ?? 'Error: Unknown')"
      ></div>
    </div>
  </NuxtLayout>
  <BackgroundTransition :is-source="true" />
</template>

<script setup lang="ts">
import "@fortawesome/fontawesome-free/css/all.min.css";

useSeoMeta({
  title: "HanaMirror",
  description: "一个简单的镜像站 / A simple mirror site",
});

const { data: content } = useAsyncData<string>(async () => {
  try {
    const { readFile } = await import("node:fs/promises");
    return await readFile("README.md", "utf-8");
  } catch (error) {
    return (error as string) || "Error: Unknown";
  }
});
</script>

<style>
.content {
  @apply bg-black bg-opacity-0 dark:bg-opacity-75;
}
</style>
