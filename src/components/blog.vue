<template>
  <div class="blog">
    <h1>Blog{{msg}}</h1>
    <button @click="saludo()">Button</button>
    <h4><b>Contador{{contador}}</b></h4>
    <button type="submit" @click="increment()">incrementar</button>
    <button type="submit" @click="decrement()">-</button>
    <!--input @input="increment" name="flavor"-->
    <input v-model="numero" v-bind:placeholder="placeholder">
  </div>
</template>
<script>
export default {
  name: 'blog',
  data () {
    return {
      msg: 'Blog!!',
      numero: '',
      placeholder: 'Número'
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
      this.$store.commit('interceptor/decrement')
    },
    increment () {
      const num = Number(this.numero)
      // if (typeof(num)==='number' && !isNaN(num)) {
      if (num) {
        this.$store.commit('interceptor/incrementByValue', Number(this.numero))
      } else {
        setTimeout(() => {
          this.numero = ''
          this.placeholder = ':/ Número inválido'
        }, 0)
        setTimeout(() => {
          this.placeholder = 'Número'
        }, 2000)
      }
    }
  },
  computed: {
    contador: function () {
      return this.$store.getters['interceptor/obtenerContador']
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
