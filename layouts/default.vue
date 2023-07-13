<template>
  <div class="test">
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="https://google.com" target="_blank"> Google </NuxtLink>
    </nav>
    <slot />
  </div>
</template>
<style lang="scss" scoped></style>
