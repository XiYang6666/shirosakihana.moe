<!-- Fuck the fucking Safari Browser -->
<template>
  <div ref="bgRef" id="safari-bg" />
</template>

<style>
#safari-bg {
  @apply bg-cover bg-center bg-fixed;
  @apply fixed top-0 h-dvh left-0 right-0;
  @apply -z-10;
  transform: translateZ(0);
}

#safari-bg::after {
  content: "";
  @apply pointer-events-none;
  @apply bg-cover bg-center bg-fixed;
  @apply fixed top-0 left-0 right-0 bottom-0;
  @apply -z-10;
  background-image: var(--after-background);
  opacity: var(--after-opacity, 0);
  transform: translateZ(0);
}
#safari-bg::after.bg-in {
  @apply transition-opacity duration-1000 ease-in-out;
}
</style>
