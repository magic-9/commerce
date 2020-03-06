<template>
  <div class="vee-navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Movies</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/"><a class="nav-link" href="#"
                >Home</a></router-link>
            </li>

          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                 <a href="#" @click.prevent="$emit('open_cart')"><i class="fas fa-shopping-cart"></i> {{getCartCount}}</a>
            </li>
          </ul>
   
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
import {mapGetters} from 'vuex';
export default {
    name:"navbar",
    computed:{
       ...mapGetters(['getCartCount'])
    }
   
}
</script>
