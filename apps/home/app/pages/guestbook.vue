<template>
  <PostBase title="留言板">
    <WalineComponent class="self-center w-full"></WalineComponent>
    <DevOnly>
      <p v-for="i of 100">awa</p>
    </DevOnly>
  </PostBase>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "留言板",
});
</script>
