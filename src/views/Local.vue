<template>
  <div class="mx-auto pt-20 pb-10 w-11/12">
    <s-data v-if="waitData" />
    <div class="mx-auto m-6 bg-indigo-100 rounded-lg lg:max-w-5xl" v-else>
      <div class="py-5 text-4xl font-bold text-gray-700 text-center">Jumlah Kasus Covid-19 di Indonesia</div>
      <div class="py-6 px-5 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-3 text-3xl">
        <div
          class="text-center py-3 w-full rounded-md mx-auto my-1 shadow-lg bg-white hover:bg-gray-800 col-span-3 sm:col-span-6 lg:col-span-1 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl gray"
        >
          <div
            class="gray-mute-font text-gray-600 text-xl transform transition duration-500"
          >Positif</div>
          <div
            class="text-5xl text-gray-900 gray-font font-semibold transform transition duration-500 font-source"
          >{{confirmed}}</div>
        </div>
        <div
          class="text-center py-3 w-full rounded-md mx-auto my-1 shadow-lg bg-white green col-span-3 lg:col-span-1 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl"
        >
          <div
            class="text-gray-600 green-mute-font transform transition duration-500 text-xl"
          >Sembuh</div>
          <div
            class="text-5xl text-green-600 green-font font-semibold transform transition duration-500 font-source"
          >{{recovered}}</div>
        </div>
        <div
          class="text-center py-3 w-full rounded-md mx-auto my-1 shadow-lg bg-white red col-span-3 lg:col-span-1 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl"
        >
          <div
            class="text-gray-600 red-mute-font transform transition duration-500 text-xl"
          >Meninggal</div>
          <div
            class="text-5xl text-red-600 red-font transform transition duration-500 font-semibold font-source"
          >{{deaths}}</div>
        </div>
      </div>
    </div>

    <s-table v-if="waitTable" />
    <div class="mx-auto m-6 px-5 pt-8 lg:max-w-5xl" v-else>
      <div class="py-5 text-4xl font-bold text-center">Daftar Kasus Covid-19 berdasarkan provinsi</div>
      <b-table
        :data="dataTable"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :pagination-simple="isPaginationSimple"
        :pagination-position="paginationPosition"
        :default-sort-direction="defaultSortDirection"
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"
        default-sort="user.Kasus_Posi"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
      >
        <template slot-scope="props">
          <template v-for="column in columns">
            <b-table-column :key="column.id" v-bind="column" sortable>
              <template
                v-if="column.searchable && !column.numeric"
                slot="searchable"
                slot-scope="props"
              >
                <b-input
                  v-model="props.filters[props.column.field]"
                  placeholder="Search..."
                  icon="magnify"
                />
              </template>
              {{ props.row[column.field] }}
            </b-table-column>
          </template>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import SData from '@/components/SkeletonData';
import STable from '@/components/SkeletonTable';
import alertify from "alertifyjs";

export default {
  components: {
    's-data': SData,
    's-table': STable
  },
  data() {
    return {
      confirmed: "",
      waitData: true,
      waitTable: true,
      recovered: "",
      deaths: "",
      dataTable: [],
      columns: [
        {
          field: "FID",
          label: "ID",
          numeric: true,
          width: "50"
        },
        {
          field: "Provinsi",
          label: "Nama Provinsi",
          searchable: true
        },
        {
          field: "Kasus_Posi",
          label: "Positif"
        },
        {
          field: "Kasus_Semb",
          label: "Sembuh"
        },
        {
          field: "Kasus_Meni",
          label: "Meninggal"
        }
      ],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: "bottom",
      defaultSortDirection: "asc",
      sortIcon: "chevron-up",
      sortIconSize: "",
      currentPage: 1,
      perPage: 10
    };
  },
  async created() {
    await this.fetchLocal();
    await this.fetchDistrict();
  },
  methods: {
    async fetchLocal() {
      try {
        const response = await this.$local({
          method: "GET",
          url: "/",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8"
          }
        });
        this.confirmed = response.data[0].positif;
        this.recovered = response.data[0].sembuh;
        this.deaths = response.data[0].meninggal;
      } catch (error) {
        alertify.set('notifier','position', 'bottom-center');
        alertify.error('Harap periksa jaringan anda');
        console.error(error);
      } finally {
        this.waitData = false;
      }
    },
    async fetchDistrict() {
      try {
        const response = await this.$local({
          method: "GET",
          url: "/provinsi/",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8"
          }
        });
        for (let i = 0; i < response.data.length; i++) {
          this.dataTable[i] = response.data[i].attributes;
        }
        this.waitTable = true;
      } catch (error) {
        alertify.set('notifier','position', 'bottom-center');
        alertify.error('Harap periksa jaringan anda');
        console.error(error);
      } finally {
        this.waitTable = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: 'Open Sans', sans-serif;
}

.font-source {
  font-family: 'Source Sans Pro', sans-serif;
}

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