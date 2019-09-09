<template>
  <ul class="row flex-row align-items-center justify-content-between">
    <p
      class="text-dark text-bold text-center"
      v-if="getAcquiredStocks.length < 1">
      Portfolio is empty
    </p>
    <template v-else>
      <app-card-of-stocks
        v-for="(item, key) of getAcquiredStocks"
        :key="key"
        :background="'stock-card__header--portfolio'"
        :class-title="'text-primary'"
        :title-text="item.title"
        :subtitle-text="`Price:${item.price}`"
        :separator="' | '"
        :subtitle-text-sell="`Quantity:${item.quantity}`"
        :class-button="'btn-danger'"
        :button-text="'Sell'">
      </app-card-of-stocks>
    </template>
  </ul>
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
