<template>
  <li class="stock-card col-md-6">
    <div class="stock-card__header" :class="background">
      <h4 class="card-title" :class="classTitle">{{ titleText }}</h4>
      <span :class="classTitle">
        ( {{ subtitleText | price }}
        <span v-if="subtitleTextSell">{{ separator }}{{ subtitleTextSell | quantity }}</span>
        )
      </span>
    </div>
    <div class="stock-card__body">
      <input
        type="number"
        class="form-control"
        placeholder="Quantity"
        :class="{'text-danger': maxAmountFunds}"
        v-model.number="quantity">
      <button
        class="btn"
        :class="classButton"
        :disabled="maxAmountFunds || quantity <=0 || !Number.isInteger(quantity)"
        @click="actionOfStocks(action)">
        {{ buttonText }}
      </button>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardOfStocks',
  props: {
    action: {
      type: String,
      required: true,
    },
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
      type: Number,
      required: true,
    },
    separator: {
      type: String,
    },
    subtitleTextSell: {
      type: Number,
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
  computed: {
    ...mapGetters(['getFunds']),
    maxAmountFunds() {
      if (this.subtitleTextSell) {
        return this.quantity > this.subtitleTextSell
      }
      return this.subtitleText * this.quantity > this.getFunds
    },
  },
  methods: {
    actionOfStocks(act) {
      if (act === 'buy') {
        this.$store.commit('setBuyFunds', {
          price: this.subtitleText,
          title: this.titleText,
          quantity: this.quantity,
        })
        this.quantity = ''
      } else if (act === 'cell') {
        this.$store.commit('setCellFunds', {
          price: this.subtitleText,
          title: this.titleText,
          quantity: this.quantity,
        })
        this.quantity = ''
      }
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
