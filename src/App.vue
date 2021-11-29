<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/layout/navbar/Navbar.vue';
import Footer from '@/layout/footer/Footer.vue';

export default defineComponent({
  name: 'App',
  components: { Navbar, Footer }
});
</script>

<style>

</style>