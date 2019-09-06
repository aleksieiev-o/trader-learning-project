<template>
  <div class="row">
    <div class="main-menu col-lg-12">
      <ul class="main-menu__list nav nav-pills">
        <li class="main-menu__item nav-item">
          <router-link
            class="main-menu__link nav-link"
            to="/">
            <p class="logo text-dark">
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
        <button class="btn btn-outline-secondary">
          End day
        </button>
        <select
          name="saveLoad"
          id="saveLoad"
          class="custom-select">
          <option selected value="">Save & Load</option>
          <option value="1">Save Data</option>
          <option value="2">Load Data</option>
        </select>
        <p class="text-dark">Funds: ${{ headerFunds }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      headerFunds: 10000,
    }
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
</style>

<style lang="scss" scoped>
  .main-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #6c757d;
    border-radius: .25rem;
    padding: 10px;

    &__list {
      align-items: flex-end;
    }

    &__item:not(.logo) {
      &:hover {
        background-color: rgba(#999, .1);
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

  .logo {
    font-size: 20px;
    font-weight: bold;
  }

  .custom-select {
    width: 135px;
    border: none;
  }

  .btn {
    border: none;
    &:hover {
      border: none;
      color: inherit;
      background-color: rgba(#999, .1);
    }
  }
</style>
