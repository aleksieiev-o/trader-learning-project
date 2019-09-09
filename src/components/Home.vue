<template>
  <div class="row">
    <div class="col-auto">
      <h1 class="text-dark card-title">Trade or View your Portfolio</h1>
      <h6 class="text-dark">You may save and load your Data</h6>
      <h6 class="text-dark">Click on a 'End day' to begin a new Day</h6>
      <hr>
      <p class="text-dark text-bold">Your funds: ${{ funds }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      funds: 'getFunds',
    }),
  },
  // created() {
  //   this.$store.dispatch('loadStocks')
  // },
}
</script>

<style lang="scss" scoped>
  .col-auto {
    & > * {
      margin: 20px 0;
        &:first-child { margin-top: 0; }
        &:last-child { margin-bottom: 0; }
    }
  }
</style>
