<template>
  <div id="app">
     <router-view></router-view>
      <maintabbar></maintabbar>

  </div>
</template>

<script>
 // import tabbar from './components/tabbar/tabbar.vue'
 // import tabbarltem from './components/tabbar/tabbarltem.vue'
import Maintabbar from './components/Maintabbar.vue'

export default {
  name: 'App',
  components: {
      Maintabbar
  }
}
</script>

<style>
  @import url("./assets/css/base.css");

</style>
