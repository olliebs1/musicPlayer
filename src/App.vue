<template>
  <div id="app">
    <Sidebar />
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Home
  }
}
</script>

<style>
body {
  background-color: #262626;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
