<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <i class="right material-icons" style="cursor: pointer" @click="$emit('close')">clear</i>
              <h2 class="text-override">Add a new list</h2>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <form class="white" @submit.prevent="createList">
                <label for="listTitleInput">Enter Title :</label>
                <input type="text" name="boardTitleInput" v-model="listTitle" placeholder="ex: my awesome list" required>
                <label for="listModaltextarea" required>Enter a description :</label>
                <textarea class="materialize-textarea" name="listModaltextarea" cols="30" rows="10" v-model="listDescription" placeholder="ex: a list for sharing cat pictures"></textarea>
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
    name: 'listmodal',
    data() {
      return {
        listTitle: this.listTitle,
        listDescription: this.listDescription
      }

    },

    methods: {
      createList() {
        this.$root.$data.store.actions.createList(this.listTitle,this.listDescription, this.$route.params.id)
        this.$emit('close')
        this.toastListModal("Success, created List :" + this.listTitle)
      },
      toastListModal(msg) {
        Materialize.toast(msg, 4000) // 4000 is the duration of the toast
      }
    }
  }

</script>
<style>


</style>
