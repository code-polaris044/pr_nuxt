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
}
</style>
