<template>
  <nav class="navbar">
    <ul class="navbar__items">
      <li class="navbar__item">
        <img src="/logo.png" width="80px" alt="logo">
      </li>
      <li class="navbar__item">
        <ul class="navbar__menu">
          <li v-for="(item, key) in navbars" :key="item" class="navbar__menu-item">
            <RouterLink :href="item.link">{{ item.name }}</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { navbars } from '@/content/global';
</script>