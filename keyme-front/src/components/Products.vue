<template>
  <div class="container">
    <div class="header mt-6 font-bold flex lg:flex-row md:flex-row sm:flex-col">
      <div class="lg:w-3/4 md:w-3/4 sm:w-full">
        <h1 class="sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl text-orange">
          Add or Scan Your Free Key
        </h1>
        <h2
          class="text-blue mt-2 sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl"
        >
          FREE DELIVERY<span class="blue ml-4"
            >____________________________________</span
          >
        </h2>
      </div>
      <div class="lg:w-1/3 md:w-1/3 sm:w-full">
        <button
          @click="checkoutItems"
          class="lg:w-9/12 md:w-9/12 sm:w-full lg:m-16 md:m-16 sm:my-8 border-orange border-2 text-blue font-semibold hover:bg-orange hover:text-white rounded-full px-4 py-1 text-xl"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
    <!-- end header -->
    <div class="content mt-10 flex flex-wrap">
      <div
        v-for="item in paginatedKeyData"
        v-bind:key="item.id"
        class="max-w-sm overflow-hidden products w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 flex flex-col"
      >
        <div class="h-auto product-image">
          <img class="key-img" :src="item.imageURL" alt="item.display_name" />
        </div>
        <div class="px-6 py-4">
          <div
            class="font-regular text-xl mb-2 text-center text-darkgray key-name"
          >
            {{ item.display_name }}
          </div>
          <p class="text-gray text-center italic">${{ item.cost }}</p>
        </div>
        <div v-if="item.order === 0" class="px-6 text-center">
          <button
            @click="
              item.order = 1;
              addToCart(item);
            "
            class="inline-block w-7/12 bg-orange text-white font-semibold hover:bg-red border-red rounded-full px-4 py-1 text-xl"
          >
            Add to Cart
          </button>
        </div>
        <div v-else class="flex flex-row px-6 justify-center">
          <button
            @click="
              item.order--;
              updateCart(item);
            "
          >
            <img class="order-btn" src="../assets/icons/minus.svg" alt="add" />
          </button>
          <h2 class="px-4 py-2 font-semibold text-darkgray text-2xl">
            {{ item.order }}
          </h2>
          <button
            @click="
              item.order++;
              updateCart(item);
            "
          >
            <img class="order-btn" src="../assets/icons/plus.svg" alt="add" />
          </button>
        </div>
      </div>
      <!-- end products -->
    </div>
    <!-- end content -->
    <div class="my-10 flex flex-row justify-center">
      <button
        @click="prevPage"
        :disabled="pageNumber === 0"
        class="border-orange border-2 text-orange font-semibold hover:bg-orange hover:border-red hover:text-white rounded-l-full px-4 py-1 text-xl"
      >
        &lt;
      </button>
      <h2 class="font-semibold text-darkgray mx-4 my-2 text-xl">
        Page {{ pageNumber + 1 }} of {{ pageCount }}
      </h2>
      <button
        :disabled="pageNumber >= pageCount - 1"
        @click="nextPage"
        class="border-orange border-2 text-orange font-semibold hover:bg-orange hover:border-red hover:text-white rounded-r-full px-4 py-1 text-xl"
      >
        &gt;
      </button>
    </div>
  </div>
  <!-- end component -->
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "products",
  data() {
    return {
      keyData: this.$store.getters.getKeyData,
      pageNumber: 0,
      pageSize: 9,
      cartItems: []
    };
  },

  created() {
    this.keyData = this.$store.getters.getKeyData;
    this.cartItems = this.$store.getters.getOrderData;
  },

  methods: {
    ...mapActions({
      addCartItemsToOrders: "addCartItemsToOrders"
    }),
    checkoutItems() {
      this.addCartItemsToOrders(this.cartItems);
      this.$router.push({ name: "cart" });
    },

    prevPage() {
      this.pageNumber--;
    },

    nextPage() {
      this.pageNumber++;
    },

    addToCart(keyItem) {
      this.cartItems.push(keyItem);
      console.log("After new item added:", this.cartItems);
    },

    updateCart(keyItem) {
      const cartIndex = this.cartItems.findIndex(
        item => item.id === keyItem.id
      );
      if (keyItem.order > 0) {
        this.cartItems[cartIndex].order = keyItem.order;
      } else {
        this.cartItems.splice(cartIndex, 1);
      }
      console.log("After update: ", this.cartItems);
    }
  },

  computed: {
    pageCount() {
      return Math.ceil(this.keyData.length / this.pageSize);
    },

    paginatedKeyData() {
      const from = this.pageNumber * this.pageSize;
      const to = from + this.pageSize;
      return this.keyData.slice(from, to);
    }
  }
};
</script>

<style scoped>
.product-image .key-img {
  width: 100px !important;
  max-height: 250px !important;
  margin-left: auto;
  margin-right: auto;
  transform: rotate(-45deg) !important;
}

.key-name {
  word-break: normal;
}

.order-btn {
  width: 54px;
}
</style>
