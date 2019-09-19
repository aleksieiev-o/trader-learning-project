<template>
  <div>
    <p
      class="text-dark text-bold text-center"
      v-if="getAcquiredStocks.length < 1">
      Portfolio is empty
    </p>
    <template v-else>
      <ul class="row flex-row align-items-center justify-content-between">
        <app-card-of-stocks
          v-for="(item, key) of getAcquiredStocks"
          :key="key"
          :action="'cell'"
          :background="'stock-card__header--portfolio'"
          :class-title="'text-primary'"
          :title-text="item.title"
          :subtitle-text="item.price"
          :separator="' | '"
          :subtitle-text-sell="item.quantity"
          :class-button="'btn-primary'"
          :button-text="'Sell'">
        </app-card-of-stocks>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardOfStocks from './CardOfStocks'

export default {
  name: 'Portfolio',
  components: {
    'app-card-of-stocks': CardOfStocks,
  },
  computed: {
    ...mapGetters([
      'getAcquiredStocks',
    ]),
  },
}
</script>

<style lang="scss" scoped>
  .text-bold {
    width: 100%;
  }
</style>
