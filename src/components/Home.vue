<template>
  <div>
    <div class="row largeRow">
      <div class="valign-wrapper">
        <div class="col s12">
          <div class="valign center-align ">
            <div id="modal1" class="modal">
              <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
              </div>
              <div class="modal-footer">
                <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
              </div>
            </div>
            <span class="styleY z-depth-5 flow-text ">Yello</span>
            <p class="center-align">The only Kanban you'll wish was coded properly</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row center-align">
      <a class="waves-effect white btn text-override z-depth-5 btn-large"><i class="material-icons right"></i>Get Started</a>
    </div>
    <div class="row xlargeRow">
       <div class="divider" style=""></div>
      <h2 class="center-align">"Mediocre at best. You should have used Flexbox" </p>
        <p style="font-size:20px;">-McCall</h2>
      <div class="divider"></div>
    </div>
    <div class="container">
    <div class="row largeRow" style="height:500px;">
      <div class="left col s12 m6 left">
        <h2>KanBan here, KanBan there, KanBan everywhere</h2>
        <p>You can never have enough KanBan on the go. Have a little KanBan for breakfast or even while you're at the gym. No
          more wasting time on the toilet, you have KanBan'ing to do. Yello makes KanBanning in the most awkward places possible
          with 100% mobile responsive design.</p>
      </div>
      <div class="col s12 m6 valign-wrapper right" style="">
        <img class="valign responsive-img" style="max-width:90%;padding-top:10px;padding-left:50px;margin-top:30px;" src="../assets/images/boards.png"
          alt="">
      </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HomeView',
    mounted() {
      this.$root.$data.store.actions.authenticate()
    },
    computed: {
      user() {
        return this.$root.$data.store.state.user
      }
    }

  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
