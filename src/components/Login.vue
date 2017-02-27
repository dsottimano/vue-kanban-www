<template>
  <div>
    <div class="row">
      <div class="col s6">
        <form class="white" @submit.prevent="goLogin">
          <input type="email" v-model="email" placeholder="email">
          <input type="password" v-model="password" placeholder="password">
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  // import Router from 'vue-router'

  export default {

    name: 'login',
    data() {
      return {
        email: this.email,
        password: this.password,
      }
    },
    methods: {
      goLogin: function () {
        this.$root.$data.store.actions.login(this.email, this.password)
        this.email = ''
        this.password = ''
        // if (this.$root.$data.store.state.user != null || this.$root.$data.store.state.user != undefined) {
          this.$root.$data.store.actions.getBoards(this.routerPush)
        // }
      },
      routerPush() {
        this.$router.push('/userboards')
      }
    }
  }

</script>
<style>


</style>
