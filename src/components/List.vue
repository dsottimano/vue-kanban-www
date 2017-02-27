<template>
  <div>
   <ul>
     <li v-for="t in tasks">{{t.name}}</li>
   </ul>
   
  </div>
</template>
<script>
  export default {
    name: 'Lists',
    props: ['list'],
    mounted () {

    },
    computed: {
      tasks() {
        return this.$root.$data.store.state.tasks[this.list]
      }
    }
  }

</script>
<style>


</style>
