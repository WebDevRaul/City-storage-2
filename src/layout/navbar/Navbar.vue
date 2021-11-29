<template>
  <nav>
    <ul>
      <li>
        <router-link class="" to="/">Home</router-link>
      </li>
      <User v-if="isAuth" />
      <Guest v-else />
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

import Guest from './Guest.vue';
import User from './User.vue';

export default defineComponent({
  name: 'Navbar',
  components: { Guest, User },
  computed: {
    ...mapState(['isAuth'])
  }
});
</script>

<style>
  nav {
    padding: 16px;
    background: #f9f9f9;
  }
  nav ul {
    display: flex;
    justify-content: flex-end;
  }
  nav ul li {
    margin: 0 20px;
  }
  nav ul li a, nav ul li p {
    text-decoration: none;
    color: #757575;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
  }
</style>