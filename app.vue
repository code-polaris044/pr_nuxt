<template>
  <div class="wrapper">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script>
export default {
  head: {
    bodyAttrs: {
      class: "body-class",
    },
  },
};
</script>
<style lang="scss">
.body__class {
  margin: 0px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    45deg,
    rgba(55, 109, 247, 1),
    rgba(29, 163, 137, 1),
    rgba(247, 209, 55, 1)
  ); /*グラデーションを定義*/
  background-size: 200% 200%; /*サイズを大きくひきのばす*/
  animation: bggradient 20s ease infinite;
}

@keyframes bggradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
