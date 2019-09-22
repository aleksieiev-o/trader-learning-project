<template>
  <div class="row">
    <div class="main-menu col-lg-12">
      <ul class="main-menu__list nav nav-pills">
        <li class="logo-item main-menu__item nav-item">
          <router-link
            class="main-menu__link nav-link"
            to="/">
            <p class="logo-text text-dark">
              Stock Trader
            </p>
          </router-link>
        </li>
        <li class="main-menu__item nav-item">
          <router-link
            class="main-menu__link nav-link"
            to="/portfolio">
            <p>
              Portfolio
            </p>
          </router-link>
        </li>
        <li class="main-menu__item nav-item">
          <router-link
            class="main-menu__link nav-link"
            to="/stocks">
            <p>
              Stocks
            </p>
          </router-link>
        </li>
      </ul>
      <div class="main-menu__inform">
        <button class="btn btn-outline-secondary" @click="endDay" :disabled="disabled">
          End day
        </button>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              :disabled="disabled">
              Save & Load
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#" @click.prevent="saveData">Save Data</a>
              <a class="dropdown-item" href="#" @click.prevent="loadData">Load Data</a>
            </div>
          </li>
        </ul>
        <p class="text-dark text-bold">Funds: {{ funds | currency }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      disabled: 'getDisabled',
      funds: 'getFunds',
      actualStocks: 'getActualStocks',
      acquiredStocks: 'getAcquiredStocks',
    }),
  },
  methods: {
    endDay() {
      this.$store.dispatch('beginNewDay')
    },
    saveData() {
      this.$store.commit('setDisabled', true)
      axios({
        method: 'put',
        url: 'https://stock-app-6807c.firebaseio.com/saveData.json',
        data: {
          funds: this.funds,
          actualStocks: this.actualStocks,
          portfolio: this.acquiredStocks,
        },
      })
        // .then(resp => console.log(resp))
        .then(() => this.$store.commit('setDisabled', false))
        .catch(err => console.error(err))
    },
    loadData() {
      this.$store.dispatch('loadData')
    },
  },
}
</script>

<style lang="scss">
  .custom-select,
  .btn,
  .btn-secondary {
    &:focus {
      box-shadow: none !important;
    }
  }

  .custom-select {
    &:focus {
      border: none !important;
    }
  }

  .router-link-active {
    color: rgba(#343a40, .5);
    &:hover {
      color: rgba(#343a40, .5);
    }
  }
</style>

<style lang="scss" scoped>
  .main-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #495057;
    border-radius: .25rem;
    padding: 10px;

    &__list {
      align-items: flex-end;
      transition: all linear .3s;
    }

    &__item:not(.logo-item) {
      &:hover {
        background-color: rgba(#999, .1);
        border-radius: .25rem;
      }
    }

    &__inform {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > * {
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }
  }

  .logo-text {
    font-size: 20px;
    font-weight: bold;
  }

  .btn {
    border: none;
    color: #495057;
    &:hover {
      border: none;
      color: #495057;
      background-color: rgba(#999, .1);
    }
  }
</style>
