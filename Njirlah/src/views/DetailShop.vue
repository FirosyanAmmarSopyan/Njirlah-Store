<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <img src="/images/last-banner.svg" alt="">
            </div>
            <div class="col-8">
                <h2>Top Up</h2>
                <div class="mt-5 form-userid">
                    <div class="row">
                        <div class="circle-badge mx-2 mb-2">
                            <h5>1</h5>
                        </div>
                        <h5 style="color: black;">Masukkan User ID</h5>
                    </div>
                    <div class="row container justify-content-between">
                        <div class="col-5">
                            <h6 style="color: black;">Game ID</h6>
                            <input v-model="product.gameId" class="form-control" placeholder="128123123" type="number">
                        </div>
                        <div class="col-5">
                            <div class="row">
                                <h6 style="color: black;">Zone ID OR Tag</h6>
                                <span class="ml-2">
                                </span>
                            </div>
                            <input v-model="product.zoneId" class="form-control" placeholder="1281 or -" type="number">
                        </div>
                    </div>
                </div>
                <div class="mt-5 nominal-field">
                    <div class="row">
                        <div class="circle-badge mx-2 mb-2">
                            <h5>2</h5>
                        </div>
                        <h5 style="color: black;">Pilih Nominal Top Up</h5>
                    </div>
                    <div class="mt-2 container">
                        <h6 style="color: black;">Pilih layanan</h6>
                        <div class="mt-2 d-flex row justify-content-around">
                            <ServiceCard v-for="service in services" :key="service.id" :data="service"
                                @click="selectService(service)"
                                :class="{ selected: service === product.selectedService }" />
                        </div>
                    </div>
                </div>
                <div class="mt-5 payment-field">
                    <div class="row">
                        <div class="circle-badge mx-2 mb-2">
                            <h5>3</h5>
                        </div>
                        <h5 style="color: black;">Bayar sekarang</h5>
                    </div>
                    <button @click="handlePay">Bayar Sekarang</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue';
import { mapState, mapActions } from 'pinia'
import { useShopStore } from '../stores/shop'
export default {
    components: {
        ServiceCard
    },
    computed: {
        ...mapState(useShopStore, ['services'])
    },
    methods: {
        ...mapActions(useShopStore, ['fetchService', 'pay']),
        selectService(service) {
            this.product.selectedService = service
            console.log(this.product.selectedService);
        },
        handlePay() {
            if (!this.product.selectedService) {
                Swal.fire({
                    icon: 'error',
                    title: 'Pilih salah satu',
                    text: 'Silakan pilih salah satu layanan terlebih dahulu.',
                });
            } else {
                this.pay(this.product)
            }
            // console.log(this.product);
        }
    },
    watch: {
        '$route.params.id'() {
            const id = this.$route.params.id
            this.fetchService(id)
        }
    },
    created() {
        console.log('created');
        const id = this.$route.params.id
        this.fetchService(id)
        Swal.fire(
            'Sebelum membayar pastikan pilih dahulu nominal topup',
            'Apabila Game yang anda pilih tidak mempunyai zone id, maka wajib diisi ( - ) ',
        )

        // console.log();
    }, data() {
        return {
            product: {
                selectedService: null,
                gameId: '',
                zoneId: ''
            }
        }
    },
}
</script>

<style>
.form-control::placeholder {
    color: rgba(217, 217, 217, 0.634);
}

.form-userid {
    padding: 10px;
    background-color: #9d9d9d;
    border-radius: 10px;
}

.selected {
    border: 5px solid rgb(230, 55, 163);
    background-color: #f0f0f0;
    color: white;
}

.nominal-field {
    padding: 10px;
    background-color: #9d9d9d;
    border-radius: 10px;
}

.payment-field {
    padding: 10px;
    background-color: #9d9d9d;
    border-radius: 10px;
}

.circle-badge {
    padding-left: 10px;
    padding-right: 10px;
    background-color: #eb5e28;
    border-radius: 100px;
}

button {
    --color: #560bad;
    font-family: inherit;
    display: inline-block;
    width: 10em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 20px;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);
}

button:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
}

button:hover {
    color: #fff;
}

button:before {
    top: 100%;
    left: 100%;
    transition: all .7s;
}

button:hover:before {
    top: -30px;
    left: -30px;
}

button:active:before {
    background: #3a0ca3;
    transition: background 0s;
}

.container {
    margin-top: 20px;
}
</style>