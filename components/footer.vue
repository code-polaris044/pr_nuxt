<template>
  <footer class="footer">
    <small class="cp">©2023 Shunya Sugawara</small>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: rgba($c-assort, 0.1); /* 背景色 */
  border: 1px solid rgba($c-assort, 0.4); /* ボーダー */
  border-right-color: rgba($c-assort, 0.2);
  border-bottom-color: rgba($c-assort, 0.2);
  -webkit-backdrop-filter: blur(20px); /* ぼかしエフェクト */
  backdrop-filter: blur(20px);
  box-shadow: 0 5px 20px rgba($c-assort, 0.5); /* 薄い影 */
  text-align: center;

  .cp {
    display: inline-block;
    padding: 10px 0;
  }
}
</style>
