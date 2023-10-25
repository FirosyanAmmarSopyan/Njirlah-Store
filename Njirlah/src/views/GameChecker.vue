<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-12">
                <div class="page-content">
                    <h2 class="text-center" style="margin-bottom: 100px;">Check Akun Game Online Kamu Disini <span><h2>↓↓↓</h2></span><span class="note">*note : hanya untuk cek akun game , bukan untuk cek gula darah</span></h2>
                    <!-- ***** Banner Start ***** -->
                    <div class="my-5">
                        <h5>Cek Akun Game Mobile Legends ↓↓↓</h5>
                        <form @submit.prevent="submitML" class="mt-3 row">
                            <div class="mx-2">
                                <p>User Id</p>
                                <input v-model="formML.userId" class="form-control" type="text">
                            </div>
                            <div class="mx-2">
                                <p>Zone Id</p>
                                <input v-model="formML.zoneId" class="form-control" type="text">
                            </div>
                            <div class="mt-2">
                                <button type="submit">Check</button>
                            </div>
                        </form>
                    </div>
                    <div class="my-5">
                        <h5>Cek Akun Game Free Fire ↓↓↓</h5>
                        <form @submit.prevent="submitFF" class="mt-3 row">
                            <div class="mx-2">
                                <p>User Id</p>
                                <input v-model="formFF.userId" class="form-control" type="text">
                            </div>
                            <div class="mt-2">
                                <button type="submit">Check</button>
                            </div>
                        </form>
                    </div>
                    <div class="my-5">
                        <h5>Cek Akun Game Valorant ↓↓↓</h5>
                        <form @submit.prevent="submitVALO" class="mt-3 row">
                            <div class="mx-2">
                                <p>Riot Id</p>
                                <input v-model="formVALO.riotId" class="form-control" type="text">
                            </div>
                            <div class="mx-2">
                                <p>Tag</p>
                                <input v-model="formVALO.tag" class="form-control" type="text">
                            </div>
                            <div class="mt-2">
                                <button type="submit">Check</button>
                            </div>
                        </form>
                    </div>
                    <!-- ***** Banner End ***** -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/css/fontawesome.css'
import '../assets/css/templatemo-cyborg-gaming.css'
import '../assets/css/owl.css'
import '../assets/css/animate.css'
import axios from 'axios'


export default {
    data() {
        return {
            formML: {
                userId: '',
                zoneId: ''
            },
            formFF: {
                userId: ''
            },
            formVALO : {
                riotId : '',
                tag : ''
            }
        }
    },
    methods: {
        async submitML() {
            try {
                const { data } = await axios.request({
                    url: `https://id-game-checker.p.rapidapi.com/mobile-legends/${this.formML.userId}/${this.formML.zoneId}`,
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": "206a261fd0mshb685be42ff04a44p1224d3jsn9b15af0aba62",
                        "X-RapidAPI-Host": "id-game-checker.p.rapidapi.com",
                    }
                })
                console.log(data)
                Swal.fire(
                    `Nickname : ${data.data.username}`,
                    `USER ID : ${data.data.userId}`,
                    'success'
                )
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.response.data.message}`,
                })
                console.log(error.response.data.message);
                console.log(error, '<<<<<');
            }
        },
        async submitFF() {
            try {
                const { data } = await axios.request({
                    method: 'GET',
                    url: `https://id-game-checker.p.rapidapi.com/free-fire/${this.formFF.userId}`,
                    headers: {
                        'X-RapidAPI-Key': '206a261fd0mshb685be42ff04a44p1224d3jsn9b15af0aba62',
                        'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
                    }
                })
                Swal.fire(
                    `Nickname : ${data.data.username}`,
                    `USER ID : ${data.data.userId}`,
                    'success'
                )
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.response.data.message}`,
                })
                console.log(error.response.data.message);
                console.log(error, '<<<<<');
            }
        },
        async submitVALO() {
            try {
                const { data } = await axios.request({
                    method: 'GET',
                    url: `https://id-game-checker.p.rapidapi.com/valorant/${this.formVALO.riotId}/${this.formVALO.tag}`,
                    headers: {
                        'X-RapidAPI-Key': '206a261fd0mshb685be42ff04a44p1224d3jsn9b15af0aba62',
                        'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
                    }
                })
                Swal.fire(
                    `Nickname : ${data.data.username}`,
                    `USER ID : ${data.data.userId}`,
                    'success'
                )
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.response.data.message}`,
                })
                console.log(error.response.data.message);
                console.log(error, '<<<<<');
            }
        }
    }

}
</script>

<style>
    p{
        color: white;
    }
    .note{
        font-size: 14px;
        color: red;
    }
</style>