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

  a {
    color: #343a40;
    &:hover {
      color: #343a40;
    }
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    padding: 0;
  }

  .container {
    height: 100%;
    overflow-y: hidden;
    padding-top: 20px;
  }

  .row {
    padding-bottom: 20px;
  }

  .card-title {
    margin-bottom: 0;
  }

  .text-dark {
    color: #495057 !important;
  }

  .text-bold {
    font-weight: 700;
  }
</style>
