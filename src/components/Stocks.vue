<template>
  <ul class="row flex-row align-items-center justify-content-between">
    <app-card-of-stocks
      v-for="(item, key) of getActualStocks"
      :key="key"
      :action="'buy'"
      :background="'stock-card__header--stocks'"
      :class-title="'text-success'"
      :title-text="item.title"
      :subtitle-text="item.price"
      :class-button="'btn-success'"
      :button-text="'Buy'">
    </app-card-of-stocks>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import CardOfStocks from './CardOfStocks'

export default {
  name: 'Stocks',
  components: {
    'app-card-of-stocks': CardOfStocks,
  },
  created() {
    this.$store.dispatch('loadActualStocks')
  },
  computed: {
    ...mapGetters([
      'getActualStocks',
    ]),
  },
}
</script>

<style lang="scss" scoped>
</style>
