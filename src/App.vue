<template>
  <div id="app">
    <md-toolbar class="md-primary md-layout space-between">
      <div class=md-layout-item>
        <md-menu class="main-menu">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>menu</md-icon>
          </md-button>
          <md-menu-content>
            <router-link class="md-title" to="/">
              <md-menu-item>
                <md-icon>home</md-icon>
                <span>Home</span>
              </md-menu-item>
            </router-link>
            <router-link class="md-title" to="/blog">
              <md-menu-item>
                <md-icon>forum</md-icon>
                <span>¿Quienes somos?</span>
              </md-menu-item>
            </router-link>
            <router-link class="md-title" to="/services">
              <md-menu-item>
                <md-icon>supervisor_account</md-icon>
                <span>Nuestas obras</span>
              </md-menu-item>
            </router-link>
            <router-link class="md-title" to="/contact">
              <md-menu-item>
                <md-icon>contact_support</md-icon>
                <span>Contacto</span>
              </md-menu-item>
            </router-link>
          </md-menu-content>
        </md-menu>
      </div>
      <div class="md-layout-item md-medium-size-50 md-small-hide">
        <li class="nav-item">
          <router-link class="md-title" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="md-title" to="/blog">¿Quienes somos?</router-link>
        </li>
        <li class="nav-item">
          <router-link class="md-title" to="/services">Nuestas obras</router-link>
        </li>
        <li class="nav-item">
          <router-link class="md-title" to="/contact">Contacto</router-link>
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
          <md-menu-item>
            <span>Acceder</span>
            <md-icon>phone</md-icon>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
      </div>
    </md-toolbar>
    <router-view/>
    <div class="footer">
      <h1>footer</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
 @import "./styles/global.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
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
