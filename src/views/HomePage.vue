<template>
  <div class="gallery">
    <div v-for="(item,index) in listImages" :key="index" class="gallery__item">
      <LazyImage 
        :src="item" 
        caption="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." 
        :aspectRatio="3/2"
        :preview="true"
      />
    </div>
  </div>
</template>

<script setup>
import LazyImage from '@/components/elements/LazyImage.vue';
import { generateImages } from '@/utils/generateImages'

const listImages = generateImages(20)
</script>