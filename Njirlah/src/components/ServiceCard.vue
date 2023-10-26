<template>
    <div class="cards" >
        <div class="card-inner text-center">
            <img style="width: 50px;" src="/images/diamond.png">
            <p class="mt-3" style="color: black;">{{ data.name }}</p>
            <h6 style="color: black;" class="mt-5">Rp.{{ data.price }}</h6>
        </div>
    </div>
</template>
<script>
export default {
    props : ['data']
}
</script>
<style>
.cards {
  perspective: 700px;
  margin: 5px;
}
.cards:checked{
    background-color: red;
}

.card-inner {
  width: 200px;
  height: 220px;
  background: #ffffff;
  border: 2px solid #555555;
  border-radius: 4px;
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform .5s;
}

.card-inner:hover {
  transform: translateZ(10px) rotateX(20deg) rotateY(20deg);
  cursor: pointer;
}


.card-inner:hover .card_title {
  transform: translateZ(50px);
}
</style>