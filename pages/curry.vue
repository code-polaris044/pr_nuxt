<template>
  <main class="curry__main">
    <div class="curry__mainWrap">
      <h2 class="curry__title">Favorite Curry</h2>
    </div>
  </main>
  <section class="curry">
    <div class="curry__wrap">
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry1.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry2.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry3.jpg" alt="curry" class="curry__img" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.curry__title {
  padding-top: 140px;
  text-align: center;
  margin-bottom: 70px;
  font-size: $fs-c-32;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: $c-assort;
}

.curry__wrap {
  width: $common-contents-width-pc;
  margin: 0 auto 100px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  @include tab {
    width: $common-contents-width-tab;
  }
}
</style>
