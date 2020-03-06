<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-sm-12"
          v-for="item in getProduct"
          :key="item.id"
        >
          <div class="product">
            <div class="head-product">
              <h4>{{ item.name }}</h4>
            </div>
            <div class="product-img">
              <img :src="item.img" alt="" />
            </div>
            <div class="product-link">
              <a href="#" @click.prevent="addCart(item)"
                ><i class="fas fa-shopping-cart"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.products {
  margin: 10px 0;

  .product {
    margin: 10px 0;
    position: relative;
    height: 143px;
    &:hover .head-product {
      display: flex;
    }

    .head-product {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      background-color: #dfe6e9;
      display: none;
      justify-content: center;
      align-items: center;
      transition: all 0.1s;
      color: #636e72;
    }
    .product-img {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .product-link {
      z-index: 5;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 45%);
      color: #fff;
      padding: 10px 26px;
      a{
            color: #03A9F4;
    text-decoration: none;
    font-size: 20px;
      }
    }
  }
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Product",
  data() {
    return {};
  },
  methods: {
    addCart(product) {
      this.$store.dispatch("actionAddCart", product);
    }
  },
  computed: {
    ...mapGetters(["getCartCount", "getProduct"])
  },
  mounted() {}
};
</script>
