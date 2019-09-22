<template>
  <div class="container">
    <app-header></app-header>
    <transition name="slide" type="animation" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import AppHeader from './components/Header'

export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
  },
  // created() {
  //   this.$store.dispatch('loadStocks')
  // },
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";

  html {
    height: 100%;
  }

  body {
    height: 100%;
  }

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

  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in .5s linear forwards;
    transition: opacity .5s;
  }
  .slide-leave-active {
    animation: slide-out .5s linear forwards;
    transition: opacity .5s;
    opacity: 0;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20px);
    }
  }
</style>
