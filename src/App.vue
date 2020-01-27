<template>
  <div id="app">
    <md-toolbar class="md-primary md-layout space-between">
      <div class=md-layout-item>
        <md-menu class="main-menu">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>menu</md-icon>
          </md-button>
          <md-menu-content style="text-align: center;">
            <div v-for="item in pageMenus" v-bind:key="item.id">
              <router-link class="md-title" v-bind:to="item.path">
                <md-menu-item @click="onSelectMenu(item.id)">
                  <md-icon>home</md-icon>
                  <span>{{item.menu_name}}</span>
                </md-menu-item>
              </router-link>
            </div>
          </md-menu-content>
        </md-menu>
      </div>
      <div class="md-layout-item md-medium-size-50 md-small-hide">
        <li class="nav-item" v-for="item in pageMenus" v-bind:key="item.id">
          <router-link class="md-title" v-bind:to="item.path" >{{item.menu_name}}</router-link>
        </li>
      </div>
      <div class="md-layout-item">
        <h3 class="md-title">LAUREL</h3>
      </div>
      <div class="md-layout-item">
        <md-menu md-size="big" md-direction="bottom-end">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>near_me</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item>
            <span>Administracion</span>
            <md-icon>near_me</md-icon>
          </md-menu-item>
          <md-menu-item v-if="onSession" @click="showDialog = true">
            <span>Acceder</span>
            <md-icon>input</md-icon>
          </md-menu-item>
          <md-menu-item v-if="!onSession" @click="closeSession()">
            <span>Cerrar sesion</span>
            <md-icon>logout</md-icon>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
      </div>
    </md-toolbar>
    <md-content class="md-scrollbar" v-bind:style="jota">
      <router-view/>
    </md-content>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Inicio de sesion</md-dialog-title>
      <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="username">Username</label>
                <md-input name="username" id="username" autocomplete="username" v-model="form.username"/>
                <md-icon>keyboard_voice</md-icon>
                <!--span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span-->
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="last-name">Password</label>
                <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password"/>
                <!--md-icon>keyboard_voice</md-icon-->
                <!--span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span-->
              </md-field>
            </div>
          </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="login()">Login</md-button>
      </md-dialog-actions>
    </md-dialog>
    <div class="footer">
      <h1>footer</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    jota: {
      'max-height': (window.innerHeight.toString() - 124) + 'px'
    },
    showDialog: false,
    form: {
      username: null,
      password: null
    }
  }),
  methods: {
    login () {
      const params = {
        username: this.form.username,
        password: this.form.password
      }
      this.$store.dispatch('interceptor/obtainToken', params)
        .then(() => {
          setTimeout(() => {
            if (!this.onSession) {
              this.showDialog = false
            }
          }, 2000)
        }, () => {
          console.log('Got nothing for this user except bad news.')
        })
    },
    closeSession () {
      // !! make a transaction to kill token on backend
      this.$store.dispatch('interceptor/closeSession')
    },
    fetchMenuPage () {
      this.$store.dispatch('modules/obtainPageMenuModule')
    },
    onSelectMenu (id) {
      const params = {id: id}
      this.$store.dispatch('menus/selectMenu', params)
    }
  },
  created () {
    this.fetchMenuPage()
  },
  computed: {
    onSession: function () {
      return !this.$store.getters['interceptor/isLoged']
    },
    pageMenus: function () {
      return this.$store.getters['modules/getPageMenu']
    }
  }
}
</script>

<style lang="scss" scoped>
 @import "./styles/global.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
 .md-content {
   max-width: 100%;
   overflow: auto;
 }
.footer{
  background: $main-bg-color;
  color: azure;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h3 {
  color: #42b983;
}
.main-menu {
  display: none;
}

@media screen and (min-width: 0px) and (max-width: 960px) {
  .main-menu {
    display: block;
  }
}

</style>
