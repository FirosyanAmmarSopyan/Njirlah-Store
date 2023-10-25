import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = 'http://localhost:3000'

export const useShopStore = defineStore("shop", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    games: [],
    services: [],
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    async renderGame() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/render-game",
          method: "get",
        });
        this.games = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchService(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/render-service/" + id,
          method: "get",
        });
        this.services = data;
      } catch (error) {
        console.log(error);
      }
    },

    async pay(product) {
      const { data } = await axios({
        url: this.baseUrl + "/generate-mt-token",
        method: "post",
        data : product
      });
      console.log(product.selectedService.id , '<<<< id serpis');
      // console.log(data.token);
      // window.snap.pay(data.token)
      // console.log(serviceId , '<<<< ini serpis id');
      const serviceId = product.selectedService.id
      window.snap.pay(data.token, {
        onSuccess: async (result) => {
            console.log('ini kesini <<<<<< '  , this.baseUrl);
            console.log(baseUrl , '<<<<tanpa this');
            await axios({
              url : this.baseUrl + '/create-transaction',
              method : 'post',
              data : {
                serviceId
              }
          })
          console.log(serviceId , '<<<<<<');
          Swal.fire(
            'Terima Kasih Rich Man :)',
          )
        },
      });
    },
  },
});
