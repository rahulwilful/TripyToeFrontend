<template>
  <div v-auto-animate>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar2.vue";
</script>
