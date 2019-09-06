<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/Header'

export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
  },
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
  p {
    margin: 0;
  }
  .container {
    height: 100%;
    overflow-y: hidden;
    padding-top: 10px;
  }
  .row {
    padding-bottom: 20px;
  }
</style>
