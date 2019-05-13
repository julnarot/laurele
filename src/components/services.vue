<template>
  <div class="services">
    <h1 @click="fetchProducts()">Servicios</h1>
    <table class="table table-striped" v-if="products && products[0]">
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(data,index) in products" :key="index">
                <!--div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index"-->
                  <td>{{ data.id }}</td>
                  <td>{{ data.name }}</td>
                  <!--td><img v-bind:src="data.owner.avatar_url" /></td-->
              </tr>
            </tbody>
      </table>
  </div>
</template>
<script>
export default {
  name: 'services',
  data () {
    return {
      msg: 'Servicios!!!',
      products: []
    }
  },
  created: function () {
    this.fetchProducts()
  },
  methods: {
    fetchProducts () {
      this.$http.get('https://api.github.com/search/repositories?q=topic:angular+topic:angular').then(response => {
        console.log(response.body['items'])
        // this.products = []
        this.products = response.body['items']
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
