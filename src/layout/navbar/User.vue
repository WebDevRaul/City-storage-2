<template>
  <li>
    <router-link class="" to="/dashboard">Dashboard</router-link>
  </li>
  <li>
    <p>Log Out</p>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'User'
});
</script>

<style scoped>
  p:hover {
    cursor: pointer;
  }
</style>