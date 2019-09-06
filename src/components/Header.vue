<template>
  <div class="row">
    <div class="main-menu col-lg-12">
      <ul class="main-menu__list nav nav-pills">
        <li class="main-menu__item nav-item">
          <router-link
            class="main-menu__link nav-link"
            to="/">
            <p>
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
        <p class="text-lg-center">Funds:</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
  .main-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;

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

  .custom-select {
    width: 135px;
  }
</style>
