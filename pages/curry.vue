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
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry4.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry5.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry6.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry7.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry8.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry9.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry10.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry11.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry12.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry13.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry14.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry15.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry16.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry17.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry18.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry19.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry20.jpg" alt="curry" class="curry__img" />
      </div>
      <div class="curry__imgWrap">
        <img src="~/assets/img/curry21.jpg" alt="curry" class="curry__img" />
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
  color: $c-white;
}

.curry__wrap {
  width: $common-contents-width-pc;
  margin: 0 auto 100px;
  display: flex;
  column-gap: 40px;
  row-gap: 60px;
  flex-wrap: wrap;

  @include tab {
    width: $common-contents-width-tab;
    column-gap: 30px;
  }
}

.curry__imgWrap {
  width: calc((100% - (40px * 2)) / 3);

  @include tab {
    width: calc((100% - (30px * 1)) / 2);
  }

  .curry__img {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
}
</style>
