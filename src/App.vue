<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <!-- <div class="nav-btn">
    <router-link to='/' class="home"> Home</router-link>
    <router-link to='/contact' class="contact">Contact </router-link>
  </div> -->
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>

</style>
