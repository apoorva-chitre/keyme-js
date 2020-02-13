<template>
  <div class="container">
    <div class="header mt-6 font-bold flex lg:flex-row md:flex-row sm:flex-col">
      <div class="lg:w-3/4 md:w-3/4 sm:w-full text-center">
        <h1 class="sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl text-orange">
          Shopping Cart
        </h1>
      </div>
      <div v-if="orders.length > 1" class="lg:w-1/3 md:w-1/3 sm:w-full">
        <button
          @click="order()"
          class="lg:w-9/12 md:w-9/12 sm:w-full lg:m-8 md:m-8 sm:my-8 border-orange border-2 text-blue font-semibold hover:bg-orange hover:text-white rounded-full px-4 py-1 text-xl"
        >
          Place your Order
        </button>
      </div>
      <div v-else class="lg:w-1/3 md:w-1/3 sm:w-full">
        <button
          class="lg:w-9/12 md:w-9/12 sm:w-full lg:m-8 md:m-8 sm:my-8 border-orange border-2 text-blue font-semibold hover:bg-orange hover:text-white rounded-full px-4 py-1 text-xl"
        >
          <router-link :to="{ name: 'products' }">Order Products</router-link>
        </button>
      </div>
    </div>
    <div class="content mt-10 flex flex-wrap">
      <table v-if="orders.length > 1" class="table-auto text-center cart-items">
        <thead>
          <tr class="text-blue text-xl font-bold">
            <th class="px-4 py-2">Product Image</th>
            <th class="px-4 py-2">Product Title</th>
            <th class="px-4 py-2">Quantity</th>
            <th class="px-4 py-2">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b-2 border-gray"
            v-for="item in orders"
            v-bind:key="item.id"
          >
            <td>
              <img
                class="key-img"
                :src="item.imageURL"
                alt="item.display_name"
              />
            </td>
            <td class="text-darkgray font-regular text-xl">
              {{ item.display_name }}
            </td>
            <td class="text-darkgray font-regular text-xl">
              {{ item.order }}
            </td>
            <td class="text-gray italic text-xl">
              ${{ item.cost * item.order }}
            </td>
          </tr>
        </tbody>
      </table>
      <h2
        v-else
        class="text-gray mt-2 sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl align-center"
      >
        You do not have any orders in your cart, please order some designs.
      </h2>
      <div class="flex flex-wrap mt-12 w-full justify-center">
        <div class="px-3 md:mb-0">
          <button
            class="rounded-lg bg-blue text-white font-bold text-2xl px-24 py-2"
          >
            <router-link :to="{ name: 'products' }">Edit Order</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      orders: this.$store.getters.getOrderData
    };
  },

  created() {
    this.orders = this.$store.getters.getOrderData;
  },

  methods: {
    order() {
      this.$router.push({ name: "order" });
    }
  }
};
</script>

<style scoped>
.cart-items {
  margin: 0 auto;
  width: 100%;
}
.key-img {
  width: 60px !important;
  margin: 0 auto;
  max-height: 250px !important;
  transform: rotate(-45deg) !important;
}
</style>
