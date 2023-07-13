<template>
  <main class="index__main">
    <h2 class="index__title">Profile</h2>
    <div class="index__mainWrap">
      <img src="~/assets/img/a.jpg" alt="men" class="index__img" />
      <div class="teaxtarea">
        <h3 class="index__name">菅原 俊哉</h3>
        <div class="career">
          <p class="career__title">[経歴]</p>
          <ul class="list">
            <li class="list__item">2007年:鼻骨を骨折</li>
            <li class="list__item">2013年:青果店でアルバイト</li>
            <li class="list__item">2015年:小樽商科大学に入学</li>
            <li class="list__item">2019年:大学卒業</li>
            <li class="list__item">2019年:製糖メーカーに就職(人事)</li>
            <li class="list__item">2022年:4月からWEB関連の仕事に従事</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  <section class="skill">
    <h2 class="skill__title">Skill</h2>
    <div class="skill__wrap">
      <ul class="skill__list">
        <li class="skill__item">
          <figure class="skill__item__inner">
            <img
              src="~/assets/img/markup.jpg"
              alt="markup"
              class="skill__img"
            />
            <figcaption>
              <h4>HTML/SASS</h4>
              <p>
                HTML・SASSによるコーディングを行っています。「レスポンシブデザイン」「スマホファースト」「キレイなコーディング」を意識して行っています。
              </p>
            </figcaption>
          </figure>
        </li>
        <li class="skill__item">
          <figure class="skill__item__inner">
            <img src="~/assets/img/js.jpg" alt="js" class="skill__img" />
            <figcaption>
              <h4>javascript(ライブラリ)</h4>
              <p>
                Webサイトでは基本的な動きをJavaScriptやライブラリーでつけることができます。
              </p>
            </figcaption>
          </figure>
        </li>
        <li class="skill__item">
          <figure class="skill__item__inner">
            <img src="~/assets/img/wp.jpg" alt="wp" class="skill__img" />
            <figcaption>
              <h4>wordpress(php)</h4>
              <p>オリジナルテーマ開発を行うことができます。</p>
            </figcaption>
          </figure>
        </li>
        <li class="skill__item">
          <figure class="skill__item__inner">
            <img src="~/assets/img/git.jpg" alt="git" class="skill__img" />
            <figcaption>
              <h4>git/github</h4>
              <p>
                チケット駆動開発でプルリクエストベース開発に従事していました。
              </p>
            </figcaption>
          </figure>
        </li>
        <li class="skill__item">
          <figure class="skill__item__inner">
            <img src="~/assets/img/curry.jpg" alt="curry" class="skill__img" />
            <figcaption>
              <h4>ネパールカレー</h4>
              <p>大学生のころからネパールカレーを食べ歩いています。</p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </section>
  <section class="past">
    <div class="past__wrap">
      <h2 class="skill__title">Past</h2>
      <div class="index__mainWrap">
        <img src="~/assets/img/otaru.jpg" alt="men" class="index__img" />
        <div class="teaxtarea">
          <h3 class="index__name">梁川通り</h3>
          <div class="career">
            <p class="career__title">市場に住むプロジェクトに参加。</p>
            <p class="career__title">
              市場の食品で生活チャレンジしていました。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.index__title {
  padding-top: 140px;
  text-align: center;
  margin-bottom: 70px;
  font-size: $fs-c-32;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: $c-assort;
}

.skill__title {
  text-align: center;
  margin-bottom: 70px;
  font-size: $fs-c-32;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: $c-assort;
}
.index__mainWrap {
  width: $common-contents-width-pc;
  margin: 0 auto 100px;
  display: flex;
  gap: 40px;

  @include tab {
    width: $common-contents-width-tab;
    flex-direction: column;
    text-align: center;
  }

  .index__name {
    font-size: $fs-c-24;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .index__img {
    width: min(100%, 600px);
    height: auto;
    aspect-ratio: 3/2;
    object-fit: cover;
  }
}

.career__title {
  margin-bottom: 20px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill__wrap {
  width: $common-contents-width-pc;
  margin: 0 auto 100px;

  @include tab {
    width: $common-contents-width-tab;
  }

  .skill__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 60px;

    .skill__item {
      width: 30%;

      @include tab {
        width: 40%;
      }

      @include sp {
        width: 80%;
      }
    }
  }
}

.skill__item__inner {
  figcaption {
    h4 {
      font-size: $fs-c-20;
      font-weight: 400;
      margin-bottom: 20px;
    }
  }
}

.skill__img {
  width: min(100%, 360px);
  height: auto;
  aspect-ratio: 3/2;
  object-fit: cover;
  margin-bottom: 30px;
}
</style>
