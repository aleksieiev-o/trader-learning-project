<template>
  <div class="row">
    <div class="col-auto">
      <h1 class="text-dark card-title">Trade or View your Portfolio</h1>
      <h6 class="text-dark">You may save and load your Data</h6>
      <h6 class="text-dark">Click on a 'End day' to begin a new Day</h6>
      <p class="text-dark">Your funds: ${{ funds }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      funds: 10000,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
