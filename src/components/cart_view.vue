<template>
  <div :class="{ cart_view: true, show: stateCart }">
    <button @click="closeCart">Close</button>
    <ul v-for="item in getCart" :key="item.id" class="list-unstyled">
        <li>{{item.name}} <button @click="deleteProduct(item)">Delete</button></li>
    </ul>
  </div>
</template>

<style lang="scss">
.cart_view {
  position: fixed;
  right: 0;
  width: 252px;
  height: 100%;
  background-color: #f8f9fa;
  z-index: 444;
  top: 0;
}
.show {
  right: -252px;
  transition: all 0.3s;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "cart-view",
  props: ["display_cart"],
  methods: {
    closeCart() {
      this.display_cart = true;
    },
    deleteProduct(product){
        this.$store.dispatch("actionDeleteCart",product);
         
    }
  },
  computed: {
      ...mapGetters(["getCartCount", "getCart"]),
    stateCart() {
      return this.display_cart;
    }
    
  }
};
</script>
