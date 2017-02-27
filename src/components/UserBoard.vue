<template>
  <div>
 
      <div class="row">
        <div class="col s10">
          <h3 style="padding-left:10px;"><strong>List view for: </strong>{{boardName.name}}</h3>
        </div>
        <div class="col s2" style="padding-top:20px;">
          <a class="right btn-floating btn-large waves-effect waves-light red" @click="showModal('showListModal')"><i class="material-icons">add</i></a>
        </div>
        <listmodal :boardlist="boardlist" v-if="this.$root.$data.store.state.showListModal" @close="showModal('showListModal')">
        </listmodal>
    
    </div>
    <div class="row tab" style="margin-right:5%;margin-top:5%;white-space: nowrap;height:50vh;">
      <div style="display:inline-block;margin:0px 20px 0 20px;" v-for="b in boardlist">
        <div class="card white" style="min-width:300px;">
          <div class="card-content grey lighten-2" style="">
            <span class=" card-title text-override ">{{b.name}}</span>
            <Lists :list="b._id" :boardId="b.boardId"></Lists>
          </div>
          <div class="card-action" style="min-height:100px;">
            
            <a href="">Add new card</a>
            <a class="right btn-floating btn-large waves-effect waves-light red " @click="removeList(b._id)"><i class="material-icons small" title="Delete this board">delete</i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Lists from './List.vue'
  import listmodal from './ListModal.vue'
  export default {
    name: 'userboard',
    components: {
      Lists,
      listmodal
    },
    mounted() {
      this.$root.$data.store.actions.getLists(this.$route.params.id)
      this.$root.$data.store.actions.getBoard(this.$route.params.id)
    },
    computed: {
      boardlist() {
        return this.$root.$data.store.state.activeBoard
        console.log(this.boardlist)
      },
      boardName() {
        return this.$root.$data.store.state.activeBoardData
      }

    },
    methods: {
      removeList(id) {
        console.log("whats the id being removed", id)
        this.$root.$data.store.actions.removeList(id)
      },
      showModal(property) {
        console.log("local click working")
        this.$root.$data.store.actions.switchModal(property)
      }
    }
  }

</script>
<style>


</style>
