<template>
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <router-link to="/" style="margin-top: -30px">
              <img src="/images/anu2.svg" alt="" />
            </router-link>
            <!-- ***** Logo End ***** -->

            <!-- ***** Menu Start ***** -->
            <ul class="nav mr-5">
              <li><button @click="this.$router.push('/')" class="btn btn-light">Home</button></li>
              <li><button @click="this.$router.push('/shop')" class="btn btn-light">Buy Now</button></li>
              <li><button @click="this.$router.push('/game-checker')" class="btn btn-light">Game Checker</button></li>
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <RouterView />
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p>
            Copyright © 2023 <a href="">NJIRLAH STORE</a> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

</script>
