<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },

  // async created() {
  //   await this.fetchGlobal();
  // },

  mounted () {
    this.renderChart(this.chartdata, this.options)
  },

  // methods: {
  //   async fetchGlobal() {
  //     try {
  //       const response = await this.$global({
  //         method: 'GET',
  //         url: '/daily/'
  //       })
  //       // console.log(response.data[0]);
  //       for (let i = 0; i < response.data.length; i++) {
  //         this.confirmed[i] = response.data[i].totalConfirmed;
  //       }
  //       console.log(this.confirmed)
  //     }
  //     catch(error) {
  //       console.error(error);
  //     }
  //   }
  // }
}
</script>