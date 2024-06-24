<template>
  <div>
    <MainNav />
    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import MainNav from '@/components/layouts/MainNav.vue';
</script>