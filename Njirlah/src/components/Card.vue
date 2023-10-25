<template>
    <div class="col-lg-3 col-sm-6 card-item">
        <div class="item" @click="goToDetail">
            <img :src="data.imageUrl"
                alt="" />
            <h4>{{ data.name }}<br /><span>{{ data.item }}</span></h4>
        </div>
    </div>
</template>
<script>
export default {
    props : ['data'],
    methods : {
        goToDetail(){
            this.$router.push('/service/' + this.data.id)
            // console.log(this.data.id);
        }
    }
}
</script>
<style>
    .item:hover {
        background-color: rgb(127, 124, 121);
    }
</style>