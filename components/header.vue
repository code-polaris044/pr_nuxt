<template>
  <div class="header">
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="https://google.com" target="_blank"> Google </NuxtLink>
    </nav>
    <slot />
  </div>
</template>

<style>
.header {
  background-color: blue;
  color: aliceblue;
  display: flex;
}
</style>
