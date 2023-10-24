import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useShopStore = defineStore('shop', {
  state: () => ({
      baseUrl : 'http://localhost:3000'
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
      async renderGame(){
        try {
          const {data} = await axios({
            url : this.baseUrl + '/render-game',
            method : 'get',

          })
        } catch (error) {
          console.log(error);
        }
      }
  },
})
