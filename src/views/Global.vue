<template>
  <div class="container mx-auto py-10">
    <div class="mx-auto m-6 bg-white border rounded-lg shadow-lg lg:max-w-5xl">
      <div class="py-5 font-light text-5xl text-center ">
        Jumlah Kasus Covid-19 di Dunia
      </div>
      <div class="py-6 px-3 grid grid-cols-3 gap-4 text-3xl">
        <div class="text-center h-56 w-56 rounded-full mx-auto shadow-lg bg-gray-700 hover:bg-gray-800 sm:col-span-1 col-span-3 transition duration-300 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl">
          <div class="pt-12 text-white">Positif</div>
          <div class="text-5xl text-white font-semibold">{{confirmed.value}}</div>
        </div>
        <div class="text-center h-56 w-56 rounded-full mx-auto shadow-lg bg-red-600 red col-span-3 sm:col-span-1 transition duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow-2xl">
          <div class="pt-12 text-white">Meninggal</div>
          <div class="text-5xl text-white font-semibold">{{deaths.value}}</div>
        </div>
        <div class="text-center h-56 w-56 rounded-full mx-auto shadow-lg bg-green-600 green col-span-3 sm:col-span-1 transition duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow-2xl">
          <div class="pt-12 text-white">Sembuh</div>
          <div class="text-5xl text-white font-semibold">{{recovered.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      confirmed: '',
      recovered: '',
      deaths: ''
    };
  },
  async created() {
    await this.fetchGlobal();
  },
  methods: {
    async fetchGlobal() {
      try {
        const response = await axios({
          method: 'GET',
          url: 'https://covid19.mathdro.id/api/'
        })
        this.confirmed = response.data.confirmed;
        this.recovered = response.data.recovered;
        this.deaths = response.data.deaths;
      }
      catch(error) {
        console.error(error);
      }
    }
  }
}
</script>

<style scoped>
.red:hover {
  background-color: #e84118;
}
.green:hover {
  background-color: #44bd32;
}
</style>