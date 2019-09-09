<template>
  <li class="stock-card col-md-6">
    <div class="stock-card__header" :class="background">
      <h4 class="card-title" :class="classTitle">{{ titleText }}</h4>
      <span :class="classTitle">({{ subtitleText }}{{ separator }}{{ subtitleTextSell }})</span>
    </div>
    <div class="stock-card__body">
      <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity">
      <button class="btn" :class="classButton" @click="buyStock">{{ buttonText }}</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CardOfStocks',
  props: {
    background: {
      type: String,
      required: true,
    },
    classTitle: {
      type: String,
      required: true,
    },
    titleText: {
      type: String,
      required: true,
    },
    subtitleText: {
      type: String,
      required: true,
    },
    separator: {
      type: String,
    },
    subtitleTextSell: {
      type: String,
    },
    classButton: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  methods: {
    buyStock() {
      if (this.quantity === '' || this.quantity < 0 || this.quantity === 0) {
        this.quantity = 1
      }
      this.$store.commit('setFunds', {
        cost: parseInt(this.subtitleText.slice(6), 10),
        title: this.titleText,
        quantity: this.quantity,
      })
      this.quantity = ''
    },
  },
  data() {
    return {
      quantity: '',
    }
  },
}
</script>

<style lang="scss" scoped>
  .stock-card {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    border: 1px solid rgba(#6c757d, .5);
    border-radius: .25rem;
    flex: 1 1 45%;

    &__header {
      display: flex;
      align-items: flex-end;
      padding: 10px;
      width: 100%;
      & > * {
        &:not(:last-child) {
          margin-right: 10px;
        }
      }

      &--stocks {
        background-color: rgba(#28A747, .3);
      }

      &--portfolio {
        background-color: rgba(#007bff, .3);
      }
    }

    &__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 10px;
      width: 100%;
    }
  }

  .form-control {
    width: 150px;
  }

  .col-md-6 {
    padding: 0;
    margin-bottom: 15px;
    &:nth-child(odd) {
      margin-right: 15px;
    }
  }
</style>
