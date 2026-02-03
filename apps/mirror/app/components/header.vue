<template>
  <nav
    class="bg-zinc-50 dark:bg-zinc-900 shadow-md fixed top-0 w-full h-16 select-none"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="text-xl font-bold text-zinc-900 dark:text-zinc-100"
          >
            HanaMirror
          </NuxtLink>
        </div>

        <!-- 桌面导航菜单 -->
        <div class="portrait:hidden flex items-center space-x-8">
          <NuxtLink
            v-for="(link, index) in links"
            :to="link"
            class="text-zinc-500 hover:text-zinc-700 dark:text-zinc-200 dark:hover:text-zinc-50 transition-colors"
            active-class="text-blue-600 font-medium"
          >
            {{ index }}
          </NuxtLink>
        </div>

        <!-- 移动端菜单按钮-->
        <div class="landscape:hidden flex items-center">
          <button
            @click="isOpen = !isOpen"
            class="text-zinc-500 hover:text-zinc-700 dark:text-zinc-200 dark:hover:text-zinc-50 transition-colors focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- 移动端下拉菜单 -->
      <div class="md:hidden" v-show="isOpen">
        <div class="pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="(link, index) in links"
            :to="link"
            class="block pl-3 pr-4 py-2 rounded-md text-base font-medium text-zinc-600 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            active-class="text-blue-600 bg-blue-50"
          >
            {{ index }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const links = {
  主页: "https://shirosakihana.moe",
};

const isOpen = ref(false);
</script>
