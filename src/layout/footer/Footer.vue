<template>
  <footer>
    <h5>Developed by Savin Raul Calin</h5>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer'
});
</script>

<style scoped>
  h5 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: #f9f9f9;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
  }
</style>