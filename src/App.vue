<script setup>
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <v-app class="bg-grey-lighten-4">
    <Navbar />    
    <main class="pa-4">
      <router-view></router-view>
    </main>
  </v-app>
</template>

