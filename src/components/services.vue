<template>
  <div class="services">
    <h1 @click="fetchProducts()">Servicios</h1>
    <table class="table table-striped" v-if="repositories && repositories[0]">
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(data,index) in repositories" :key="index">
                <!--div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index"-->
                  <td>{{ data.id }}</td>
                  <td>{{ data.name }}</td>
                  <!--td><img v-bind:src="data.owner.avatar_url" /></td-->
              </tr>
            </tbody>
    </table>
    <md-progress-spinner v-if="repositoriesLoader"
    :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>
<script>
export default {
  name: 'services',
  data () {
    return {
      msg: 'Servicios!!!',
      repositoriesLoader: false
      // products: this.$store.state.repositories.repositoriesList
    }
  },
  computed: {
    repositories () {
      return this.$store.state.repositories.repositoriesList
    }
  },
  created: function () {
    this.fetchProducts()
  },
  methods: {
    fetchProducts () {
      this.repositoriesLoader = true
      this.$store.dispatch('repositories/obtainRepository')
        .then(response => {
          this.repositoriesLoader = false
        }, () => {
          this.repositoriesLoader = false
        })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
