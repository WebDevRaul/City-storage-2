<template>
  <main>
    <Title title="Sign In" />
    <VeeForm :validation-schema="schema" @submit="onSubmit">
      <label for="email">Email :
        <VeeField
          name="email"
          type="email"
        />
        <ErrorMessage class="error" name="email" />
      </label>
      <label for="password">Password :
        <VeeField
          name="password"
          type="password"
        />
        <ErrorMessage class="error" name="password" />
      </label>
        <button type="submit">Submit</button>
    </VeeForm>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Title from '@/components/common/title/Title.vue';

export default defineComponent({
  name: 'SignIn',
  components: { Title },
  data() {
    return {
      schema: {
        email: 'required|min:2|max:100|email',
        password: 'required|min:1|max:100'
      }
    };
  },
  methods: {
    async onSubmit(values: { email: string, password: string }) {
      try {
        await this.$store.dispatch('signIn', (values));
        // this.$router.push({ name: 'signUp' });
      } catch (e) {
        console.log(e);
      }
    }
  }
});
</script>

<style scoped>
  main, form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  form {
    margin-top: 24px;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 12px;
  }
  input {
    width: 225px;
    padding: 12px;
  }
  button {
    width: 225px;
    margin: 12px;
    padding: 12px;
    color: #757575;
    border-radius: 4px;
    border: 1px solid black;
    cursor: pointer;
    letter-spacing: 1.5px;
  }

</style>