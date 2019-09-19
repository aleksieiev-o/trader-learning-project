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
        <select
          name="saveLoad"
          id="saveLoad"
          class="custom-select">
          <option disabled value="">Save & Load</option>
          <option value="1">Save Data</option>
          <option value="2">Load Data</option>
        </select>
        <p class="text-dark text-bold">Funds: {{ funds | currency }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      disabled: 'getDisabled',
      funds: 'getFunds',
    }),
  },
  methods: {
    endDay() {
      this.$store.dispatch('beginNewDay')
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

  .custom-select {
    width: 115px;
    border: none;
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
