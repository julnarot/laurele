<template>
  <div class="contact">
    <h1>Contacto</h1>
    <div id="bg">
      <img src="https://static.starcraft2.com/dist/images/global/fb-share-354add99b9231e2ff9827c1291b5e1fa3baff2a82dc5a04eb3e5bff314b0ccb4d60d68eb77ac8a452c52297bbeb5c32a62ca84554401ab0b28e43c74c42766d7.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Contactoos!!!'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  #bg {
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
  }
  #bg img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
  }
</style>
