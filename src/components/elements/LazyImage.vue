<template>
  <figure class="">
    <div class="image-wrapper" :style="`padding-bottom: ${100 / aspectRatio}%`">
      <img
        loading="lazy"
        :src="imgSrc"
        :alt="alt"
        @load="onImageLoad($event)"
        @error="onImageError($event)"
        class="image"
      />
    </div>
    <figcaption v-if="caption">{{  caption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { IMAGE_ERROR } from '@/constants/global'
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'image',
  },
  caption: {
    type: String,
    default: '',
  },
  aspectRatio: {
    type: Number,
    default: 16 / 9,
  }
});

const loaded = ref(false)
const errorSrc = ref('')

const imgSrc = computed(() => {
  console.log({
    props,
    img: props.src,
    errorSrc: errorSrc.value
  })
  if(!!errorSrc.value) return errorSrc.value
  return props.src
})

const onImageLoad = (e) => {
  const el = e.target

  if(el && el.naturalHeight <= 1 && el.naturalWidth <= 1) {
    errorSrc.value = IMAGE_ERROR
  }
}

const onImageError = (e) => {
  const el = e.target || e.path[0];

  if (el && el.naturalHeight <= 1 && el.naturalHeight <= 1) {
    errorSrc.value = IMAGE_ERROR;
  }
}
</script>