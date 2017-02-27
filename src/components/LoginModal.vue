<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <i class="right material-icons" style="cursor: pointer" @click="$emit('close')">clear</i>
              <h2 class="text-override">Login</h2>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <form class="white" @submit.prevent="goLogin">
                <input type="text" name="boardTitleInput" v-model="email" placeholder="Enter your email" required>
                <input name="login-password" type="password" v-model="password" placeholder="Password">
                <button type="submit" class="right waves-effect waves-light red btn">Submit</button>
              </form>
              <div class="row"></div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'loginmodal',
    data () {
        return {
            email : this.email,
            password : this.password
        }
    },
    methods: {
      toastLoginModal(msg) {
        Materialize.toast(msg, 4000)
      },
      goLogin: function () {
        this.$root.$data.store.actions.login(this.email, this.password)
        this.$emit('close')
        this.email = ''
        this.password = ''
        if (this.$root.$data.store.actions.authenticate() == true) {
        this.$router.push('/userboards')

        } else {
            alert("something went wrong, try again"            )
        }
       
      },
      routerPush() {

        this.toastLoginModal("You are now logged in!")
        console.log("reached logged in router")
        
      }
    }
  }

</script>
<style>


</style>
