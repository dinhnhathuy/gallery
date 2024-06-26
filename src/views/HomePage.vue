<template>
  <div class="gallery">
    <div v-for="item in Array.from({length: 6})" :key="item">
      <LazyImage src="/images/lanscape.jpeg" caption="caption" />
    </div>
  </div>
</template>

<script setup>
import LazyImage from '@/components/elements/LazyImage.vue';
</script>