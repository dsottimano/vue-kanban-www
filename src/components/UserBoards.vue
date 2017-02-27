<template>
  <div>
    <div class="row">
      <div class="col s10">
        <h3><strong>My Boards</strong></h3>
      </div>
      <div class="col s2 right" style="padding-top:20px;">
        <a class="right btn-floating btn-large waves-effect waves-light red " @click="showModal('showBoardModal')"><i class="material-icons" >add</i></a>
      </div>
    </div>
    <!--start modal-->
    <boardmodal v-if="this.$root.$data.store.state.showBoardModal" @close="showModal('showBoardModal')">
    </boardmodal>
    <!--end modal-->
    <div class="row">
      <div class="right-align">
      </div>
    </div>
    <div class="row">
      <div class="col s12 m4" v-for="board in boards">
        <div class="card white " style="min-height:300px;">
          <div class="card-content white lighten-2" style="min-height:250px;">
            <span class="override-color card-title "><router-link class="override-color" :to="'/userboards/'+board._id+'/lists'">{{board.name}}</span></router-link>
            <p style="color:black;font-weight:bold;padding-top:10px;">{{board.description}}
            </p>
            <p style="color:black;font-weight:bold;padding-top:10px;" v-for="collaborator in board.collaborators">Collaborators: {{collaborator}} </p>
          </div>
          <div class="card-action center-align">
            <a class="btn-floating btn-large waves-effect waves-light red" title="Delete this board" @click="removeBoard(board)"><i class="material-icons">delete</i></a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import boardmodal from './BoardModal'
  export default {
    name: 'userboards',
    components: {
      boardmodal
    },
    mounted() {
      this.$root.$data.store.actions.getBoards()
    },
    computed: {
      boards() {
        return this.$root.$data.store.state.boards
      }
    },
    methods: {
      showModal(property) {
        console.log(this.$root.$data.store.state.showBoardModal)
        this.$root.$data.store.actions.switchModal(property)
      },
      removeBoard(board) {
        this.$root.$data.store.actions.removeBoard(board)
      }
    }
  }

</script>
<style scoped>
  .override-color {
    color: #0EBFE9 !important;
  }

</style>
