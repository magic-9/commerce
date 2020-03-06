<template>
  <div class="home">
    <navbar v-on:open_cart="open"></navbar>
    <cart-view :display_cart="open_cart"></cart-view>
    <product></product>
    {{open_cart}}
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import product from "@/components/product";
import cartView from "@/components/cart_view";
export default {
  name: "Home",
  data(){
    return{
       open_cart:true
    }
  },
  components: {
    product,
    navbar,
    cartView
  },
  methods:{
    open(){
      this.open_cart =! this.open_cart;
      
    }
  }
};
</script>
