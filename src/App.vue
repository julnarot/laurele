<template>
  <div id="app">
    <md-toolbar class="md-primary md-layout">
      <div class="md-layout-item">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/services">Services</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">contact</router-link>
        </li>
      </div>
        <div class="md-layout-item">
          <h3>LAURERLE</h3>
        </div>
        <div class="md-layout-item">
          <div class="md-layout">
            <div class="md-layout-item">
              <div class="md-layout md-medium-size-50 md-small-size-50 md-xsmall-hide">
                <div class="md-layout-item">
                  <md-button class="">Default</md-button>
                </div>
                <div class="md-layout-item">
                  <md-button class="md-raised md-accent">Acceder</md-button>
                </div>
              </div>
            </div>
            <div class="md-layout-item">
              <md-menu md-size="big" md-direction="bottom-end">
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>near_me</md-icon>
              </md-button>
              <md-menu-content>
                <md-menu-item>
                  <span>Find on map</span>
                  <md-icon>near_me</md-icon>
                </md-menu-item>
                <md-menu-item>
                  <span>Call</span>
                  <md-icon>phone</md-icon>
                </md-menu-item>
              </md-menu-content>
            </md-menu>
            </div>
          </div>
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.footer{
  background: #2c3e50;
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
</style>
