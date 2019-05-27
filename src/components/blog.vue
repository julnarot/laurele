<template>
  <div class="blog">
    <h1>Blog{{msg}}</h1>
    <h4><b>Contador{{contador}}</b></h4>
    <button type="submit" @click="increment()">incrementar</button>
    <button type="submit" @click="decrement()">-</button>
    <!--input @input="increment" name="flavor"-->
    <input v-model="numero" v-bind:placeholder="placeholder">
    <br>
    <div v-if="onSession">
      <input  type="text" v-model="username" placeholder="usuario">
      <input type="password" v-model="password" placeholder="password">
      <md-button class="md-raised md-accent" @click="login()">Login</md-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'blog',
  data () {
    return {
      msg: 'Blog!!',
      numero: '',
      placeholder: 'Número',
      username: '',
      password: ''
      // onSession: false,
    }
  },
  created: function () {
    // this.isLoged()
  },
  methods: {
    saludo () {
      console.log('hola mundo', this.$store)
    },
    decrement () {
      this.$store.commit('decrement')
    },
    increment () {
      const num = Number(this.numero)
      // if (typeof(num)==='number' && !isNaN(num)) {
      if (num) {
        this.$store.commit('incrementByValue', Number(this.numero))
      } else {
        setTimeout(() => {
          this.numero = ''
          this.placeholder = ':/ Número inválido'
        }, 0)
        setTimeout(() => {
          this.placeholder = 'Número'
        }, 2000)
      }
    },
    login () {
      this.$store.dispatch('obtainToken', {username: this.username, password: this.password})
        .then(response => {
          // console.log(response.data) // shows the user data good stuff
          console.log('Got some user data, now lets show something with it', response)
        }, () => {
          // console.log(error.response) // shows the API error invalid credentials type junk
          console.log('Got nothing for this user except bad news.')
        })
    }
  },
  isLoged: function () {
    this.onSession = this.$store.getters.isLoged
  },
  computed: {
    contador: function () {
      return this.$store.getters.obtenerContador
    },
    onSession: function () {
      return !this.$store.getters.isLoged
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
