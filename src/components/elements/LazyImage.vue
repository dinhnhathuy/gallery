<template>
  <figure class="image">
    <div :class="['image-wrapper', `${preview && 'preview'}`]" :style="`padding-bottom: ${100 / aspectRatio}%`">
      <img
        v-if="preview"
        src="/icons/path.svg"
        class="icon-preview"
        width="20px"
        height="20px"
      />
      
      <img
        loading="lazy"
        :src="imgSrc"
        :alt="alt"
        @load="onImageLoad($event)"
        @error="onImageError($event)"
      />
    </div>
    <figcaption v-if="caption"><span class="truncate">{{ caption }}</span></figcaption>
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
  },
  preview: {
    type: Boolean,
    default: false,
  }
});

const loaded = ref(false)
const errorSrc = ref('')

const imgSrc = computed(() => {
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