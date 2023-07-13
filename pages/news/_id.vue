<template>
  <h1>プレイヤー {{ playerId }} 動的なルーティング</h1>
</template>
<script>
export default {
  data() {
    return { playerId: this.$route.params.id };
  },
};
</script>
