<template>
  <form id="login" @submit.prevent="submit">
    <input type="text" name="username" placeholder="username" v-model="username">
    <input type="password" name="password" placeholder="password" v-model="password">
    <input type="submit" value="Залогиниться" />
    <router-link to="/sepulkas">Смотреть на базу сепулек</router-link>
  </form>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    submit() {
      return this.LOGIN(this);
    },
    ...mapActions('auth', [
      'LOGIN',
    ]),
  },
};
</script>
