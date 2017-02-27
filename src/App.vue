<template>
  <div>
    <div class="row"></div>
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo" style="text-decoration:none;font-weight: 200;padding-left:20px;"><strong>Yello</strong></a>
        <ul class="right hide-on-med-and-down" style="padding-right: 5px;">
          <li v-if="loggedInState">Hi {{user}} !</li>
          <li v-if="loggedInState">
            <router-link class="override-color" :to="'/userboards'">My Boards</router-link>
          </li>
          <li v-if="loggedInState" @click="logout">
            <router-link class="override-color" :to="'/logout'">Logout</router-link>
          </li>
          <li v-if="!loggedInState">
            <span style="cursor: pointer" @click="showModal('showLoginModal')"><strong>Login</strong></span>
          </li>
        </ul>
        <!--mobile menu-->
        <ul class="side-nav" id="mobile-demo">
          <h2>Yello!</h2>
          <li v-if="loggedInState">Hi {{user}} !</li>
          <li v-if="loggedInState" @click="logout">
            <router-link class="override-color" :to="'/logout'">Logout</router-link>
          </li>
          <li v-if="!loggedInState">
            <router-link class="override-color" :to="'/login'">Login</router-link>
          </li>
        </ul>
        <a href="#" data-activates="mobile-demo" class="right button-collapse" style="text-decoration:none;"><i class="material-icons">view_headline</i></a>
    </nav>
    <loginmodal v-if="this.$root.$data.store.state.showLoginModal" @close="showModal('showLoginModal')"></loginmodal>
    <router-view></router-view>
    </div>
</template>
<script>
  import homeview from './components/Home'
  import loginmodal from './components/LoginModal'
  export default {
    name: 'app',
    components: {
      homeview,
      loginmodal
    },
    mounted() {
      this.$root.$data.store.actions.authenticate()
    },
    computed: {
      user() {
        return this.$root.$data.store.state.user
      },
      loggedInState() {
        return this.$root.$data.store.state.loggedInState
      }
    },
    methods: {
      logout() {
        this.$root.$data.store.actions.logout(this.routerLogout)
        this.toastLoginModal("You are now logged out")
      },
      showModal(property) {
        console.log(this.$root.$data.store.state.showLoginModal)
        this.$root.$data.store.actions.switchModal(property)
      },
      routerLogout() {
        this.$router.push('/')
      },
      toastLoginModal(msg) {
        Materialize.toast(msg, 4000) // 4000 is the duration of the toast
      }
    }
  }

</script>
<style>


</style>
