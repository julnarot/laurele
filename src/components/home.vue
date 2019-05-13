<template>
  <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
         <h3 @click="goTodetail(data.productId)">{{data.productTitle}}</h3>
      </div>
    </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      products: [
        {
          productTitle: 'ABCN',
          image: require('../assets/logo.png'),
          productId: 1
        },
        {
          productTitle: 'KARMA',
          image: require('../assets/logo.png'),
          productId: 2
        },
        {
          productTitle: 'Tino',
          image: require('../assets/logo.png'),
          productId: 3
        },
        {
          productTitle: 'EFG',
          image: require('../assets/logo.png'),
          productId: 4
        },
        {
          productTitle: 'MLI',
          image: require('../assets/logo.png'),
          productId: 5
        },
        {
          productTitle: 'Banans',
          image: require('../assets/logo.png'),
          productId: 6
        }
      ]
    }
  },
  methods: {
    goTodetail (proId) {
      this.$router.push({name: 'details', params: {Pid: proId}})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
