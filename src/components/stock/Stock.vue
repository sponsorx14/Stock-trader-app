<template>
  <div class="col-sm-6 ">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{stock.price}} )</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
              v-model="quantity"
              class="form-control"
              type="number"
              placeholder="Quantity"
          >
        </div>
        <div class="pull-right">
          <button
            @click="buyStock"
            :disabled="quantity <= 0"
            class="btn btn-success"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Stock",
    props: ['stock'],
    data(){
      return {
        quantity: 0
      }
    },
    methods: {
      buyStock(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order)
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>

</style>