<template>
  <header class="header">
    <div class="header__wrap">
      <h1 class="header__title">S. Sugawara Profile</h1>
      <nav class="nav">
        <NuxtLink to="/">
          <font-awesome-icon :icon="['fas', 'house']" />
        </NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink
          to="https://github.com/code-polaris044/pr_nuxt"
          target="_blank"
        >
          Github
        </NuxtLink>
      </nav>
    </div>
    <slot />
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: hsl(155, 100%, 43%);
}
.header__wrap {
  width: $common-contents-width-pc;
  justify-content: space-between;
  margin: 0 auto;
  color: #db005b;
  display: flex;
  height: $h-pc-h;
  align-items: center;

  .header__title {
    font-size: ;
  }
}

.fa-github-square {
  font-size: 20px;
  color: black;
}
</style>

<script setup lang="ts"></script>
