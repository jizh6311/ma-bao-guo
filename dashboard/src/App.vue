<template>
  <img alt="Vue logo" src="./assets/master.jpeg">
  <HomePage msg="朋友们好啊!"/>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  border-radius: 50%;
  height: 500px;
  width: 35%;
}
</style>
