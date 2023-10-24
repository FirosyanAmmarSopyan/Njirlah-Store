<template>
     <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12">
          <div class="page-content">
            <!-- ***** Most Popular Start ***** -->
            <h1>LIST GAME</h1>
            <div class="most-popular">
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-flex row justify-content-center">
                    <!-- card Content -->
                        <Card />
                        
                    <!-- card content -->
                  </div>
                </div>
              </div>
            </div>
            <!-- ***** Most Popular End ***** -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import '../assets/css/fontawesome.css'
import '../assets/css/templatemo-cyborg-gaming.css'
import '../assets/css/owl.css'
import '../assets/css/animate.css'
export default {
    components : {
        Card
    }
}
</script>