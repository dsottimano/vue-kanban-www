<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <i class="right material-icons" style="cursor: pointer" @click="$emit('close')">clear</i>
              <h2 class="text-override">Add a new board</h2>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <form class="white" @submit.prevent="createBoard">
                <label for="boardTitleInput">Enter Title :</label>
                <input type="text" name="boardTitleInput" v-model="boardTitle" placeholder="ex: my awesome board" required>
                <label for="boardModaltextarea" required>Enter a description :</label>
                <textarea class="materialize-textarea" name="boardModaltextarea" cols="30" rows="10" v-model="boardDescription" placeholder="ex: a board for sharing cat pictures"></textarea>
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
    name: 'boardmodal',
    data() {
      return {
        viewModal : false,
        boardTitle: this.boardTitle,
        boardDescription: this.boardDescription
      }

    },
    methods: {
      // closeModal : function () {
      //   this.viewModal = !this.viewModal
      //   console.log("what is the value of showmodal? ", this.showModal)
      // },
      createBoard() {
        this.$root.$data.store.actions.createBoard({
          name: this.boardTitle,
          description: this.boardDescription
        })
        this.$emit('close')
        this.toastBoardModal("Success, created Board :" + this.boardTitle)
      },
      toastBoardModal(msg) {
        Materialize.toast(msg, 4000) // 4000 is the duration of the toast
      }
    }
  }

</script>
<style>


</style>
