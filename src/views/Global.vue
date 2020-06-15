<template>
  <div class="mx-auto py-10 w-11/12">
    <s-data v-if="!loaded" />
    <div class="mx-auto m-6 bg-indigo-100 rounded-lg lg:max-w-5xl" v-else>
      <div class="py-5 font-light text-5xl text-center">Jumlah Kasus Covid-19 di Dunia</div>
      <div class="py-6 px-5 grid grid-cols-3 gap-3 text-3xl">
        <div
          class="text-center py-3 w-full rounded-md mx-auto shadow-lg bg-white hover:bg-gray-800 sm:col-span-1 col-span-3 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl gray"
        >
          <div
            class="gray-mute-font text-gray-600 text-xl transform transition duration-500"
          >Positif</div>
          <div
            class="text-5xl text-gray-900 gray-font font-semibold transform transition duration-500"
          >{{confirmed}}</div>
        </div>
        <div
          class="text-center py-3 w-full rounded-md mx-auto shadow-lg bg-white green col-span-3 sm:col-span-1 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl"
        >
          <div
            class="text-gray-600 green-mute-font transform transition duration-500 text-xl"
          >Sembuh</div>
          <div
            class="text-5xl text-green-600 green-font font-semibold transform transition duration-500"
          >{{recovered}}</div>
        </div>
        <div
          class="text-center py-3 w-full rounded-md mx-auto shadow-lg bg-white red col-span-3 sm:col-span-1 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl"
        >
          <div
            class="text-gray-600 red-mute-font transform transition duration-500 text-xl"
          >Meninggal</div>
          <div
            class="text-5xl text-red-600 red-font transform transition duration-500 font-semibold"
          >{{deaths}}</div>
        </div>
      </div>
    </div>

    <div class="mx-auto pb-5 mt-12 m-6 bg-indigo-100 rounded-lg lg:max-w-5xl">
      <div class="px-3">
        <div class="py-5 font-light text-5xl text-center">Statistik Covid-19 di Dunia</div>
        <Chart :chartdata="chartdata" :options="options" v-if="loaded" />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
import SData from "@/components/SkeletonData";

export default {
  components: {
    Chart,
    's-data': SData
  },
  data() {
    return {
      confirmed: "",
      recovered: "",
      deaths: "",
      loaded: false,
      chartdata: {
        labels: [],
        datasets: [
          {
            label: "Peningkatan Pasien Positif",
            borderColor: "red",
            pointBackgroundColor: "black",
            pointHoverRadius: 6,
            pointRadius: 1,
            backgroundColor: "transparent",
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: true,
          position: "bottom",
          text: "Grafik Peningkatan Pasien Positif Covid-19 Perhari"
        }
      }
    };
  },
  async created() {
    await this.fetchGlobal();
  },
  async mounted() {
    this.loaded = false;
    await this.fetchChart();
  },
  methods: {
    async fetchGlobal() {
      try {
        const response = await this.$global({
          method: "GET",
          url: "/"
        });
        this.confirmed = this.format(response.data.confirmed.value);
        this.recovered = this.format(response.data.recovered.value);
        this.deaths = this.format(response.data.deaths.value);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchChart() {
      try {
        const response = await this.$global({
          method: "GET",
          url: "/daily/"
        });
        for (let i = 0; i < response.data.length; i++) {
          this.chartdata.datasets[0].data[i] = response.data[i].deltaConfirmed;
          this.chartdata.labels[i] = response.data[i].reportDate;
        }
        this.loaded = true;
      } catch (error) {
        console.error(error);
      }
    },
    format(param) {
      return param.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  }
};
</script>

<style lang="scss" scoped>
.gray:hover {
  .gray-font {
    color: white;
  }
  .gray-mute-font {
    color: white;
  }
}
.red:hover {
  .red-font {
    color: white;
  }
  .red-mute-font {
    color: white;
  }
  background-color: #e84118;
}
.green:hover {
  .green-font {
    color: white;
  }
  .green-mute-font {
    color: white;
  }
  background-color: #44bd32;
}
</style>