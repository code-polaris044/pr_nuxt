<template>
  <h1 class="headline">About Page</h1>
</template>
<script setup>
definePageMeta({
  layout: false,
});
ScrollReveal().reveal(".headline", {
  delay: 200,
  origin: "left",
  reset: false,
});
</script>
