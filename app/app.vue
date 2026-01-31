<template>
  <IosCompatBody>
    <header>
      <Header></Header>
    </header>

    <main>
      <div
        class="bg w-full min-h-dvh bg-black bg-opacity-20 dark:bg-opacity-80 flex items-center flex-col"
      >
        <!-- 占位符 -->
        <div class="w-full h-16"></div>
        <!-- 内容 -->
        <div class="w-10/12 m-8 p-8 bg-zinc-200 dark:bg-zinc-950 rounded-xl">
          <div
            class="prose max-w-full dark:prose-invert text-zinc-800 dark:text-zinc-200"
            v-html="$md.render(content)"
          ></div>
        </div>
      </div>
    </main>
  </IosCompatBody>

  <RefreshBackgroundButton
    class="fixed right-2 bottom-1"
  ></RefreshBackgroundButton>
</template>

<script lang="ts" setup>
import "@fortawesome/fontawesome-free/css/all.min.css";

useSeoMeta({
  title: "HanaMirror",
  description: "一个简单的镜像站 / A simple mirror site",
});

const content: Ref<string> = useState();
if (import.meta.server) {
  const { data, error } = await useAsyncData(async () => {
    const { readFile } = await import("node:fs/promises");
    const content = await readFile("README.md", "utf-8");
    return content;
  });
  if (error.value) {
    console.error(error);
    content.value =
      error.value instanceof Error ? error.value.message : "Error";
  } else {
    content.value = data.value || "Error";
  }
}

onMounted(() => {
  setupBg();
});
</script>
