<script setup lang="js"></script>

<template>
  <header class="header">
    <div class="header__wrap">
      <h1 class="header__title">S. Sugawara Profile</h1>
      <nav class="nav">
        <NuxtLink to="/" class="nav__link">
          <font-awesome-icon :icon="['fas', 'house']" />
        </NuxtLink>
        <NuxtLink to="/about" class="nav__link">About</NuxtLink>
      </nav>
    </div>
    <slot />
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  z-index: 1;
  background-color: rgba($c-assort, 0.1); /* 背景色 */
  border: 1px solid rgba($c-assort, 0.4); /* ボーダー */
  border-right-color: rgba($c-assort, 0.2);
  border-bottom-color: rgba($c-assort, 0.2);
  -webkit-backdrop-filter: blur(20px); /* ぼかしエフェクト */
  backdrop-filter: blur(20px);
  box-shadow: 0 5px 20px rgba($c-assort, 0.5); /* 薄い影 */
}
.header__wrap {
  width: $common-contents-width-pc;
  justify-content: space-between;
  margin: 0 auto;
  color: $c-accent;
  display: flex;
  height: $h-pc-h;
  align-items: center;
  font-weight: 600;

  @include tab {
    width: $common-contents-width-tab;
  }

  .header__title {
    font-size: $fs-c-32;
    line-height: 1.6;
    letter-spacing: 0.1em;
  }
}

.nav {
  display: flex;
  gap: 30px;
  .nav__link {
    color: $c-text;
    transition: all 0.3s;

    &:hover {
      color: $c-link;
    }
  }
  .router-link-active {
    color: $c-accent;
  }
}
</style>
