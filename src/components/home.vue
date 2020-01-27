<template>
  <div>
    <!--h1>{{page.name}}</h1-->
    <section />

    <div v-for="(item) in page" v-bind:key="item.id">
      <h3>{{item.name}}</h3>
      <div v-if="item.content &&  item.content.length>0">
        <span class="md-body-2">{{item.name}}</span>
      </div>
      <div v-if="item.content &&  item.content.length>0" class="flex-container wrap">
        <div v-for="(ite) in item.content" v-bind:key="ite.id">
          <div class="flex-item">
            <md-card v-if="item.code ==='9'">
              <md-card-media>
                <img src="https://www.programetineret.ro/wp-content/uploads/2016/06/old-book-desktop-wallpapers-44-320x240.jpeg" alt="People">
              </md-card-media>
              <md-card-content>
                {{ite.name}}
              </md-card-content>
            </md-card>
            <div v-else-if="item.code ==='4'">
                <md-avatar class="md-large">
                  <img src="https://www.programetineret.ro/wp-content/uploads/2016/06/old-book-desktop-wallpapers-4-65x65.jpeg" alt="People">
                </md-avatar>
              <span class="md-body-2">{{ite.name}}</span>
            </div>
            <div v-else>
              <span>{{ite.name}}</span>
            </div>
          </div>
        </div>
      </div>

          <!--div class="flex-container wrap">
            <md-card class="flex-item">
              <md-card-media>
                <img src="https://www.programetineret.ro/wp-content/uploads/2016/06/old-book-desktop-wallpapers-44-320x240.jpeg" alt="People">
              </md-card-media>
              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
              </md-card-content>
            </md-card>
          </div-->
        </div>
      </div>
</template>
<script>
import section from './home/section'
export default {
  name: 'home',
  data () {
    return {
      title: 'Home'
    }
  },
  methods: {
    goTodetail (proId) {
      this.$router.push({name: 'details', params: {Pid: proId}})
    },
    getModule () {
      // this.$store.dispatch('modules/obtainModule')
    }
  },
  computed: {
    page () {
      return this.$store.state.menus.currentPage
    }
  },
  beforeMount () {
  },
  created () {
    this.getModule()
  },
  component: {
    section
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .flex-container {
    padding: 0;
    margin: 0;
    list-style: none;
    // border: 1px solid silver;
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
  }

  .wrap    {
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .flex-item {
    // background: green;
    padding: 5px;
    width: 320px;
    margin: 4px;
    // margin: 10px;

    line-height: 100px;
    // color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
  }
</style>
