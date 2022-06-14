<template>
  <div>
    <div v-if="isLoading">
      <OtherLoading />
    </div>
    <div v-else class="p-4">
      <TaskPanel :taskList="taskList" />
      <div class="mt-3">
        <div
          class="px-3 py-2 d-flex justify-content-between align-items-center bg-main shadow-lg"
        >
          <span
            ><b-icon icon="card-list"></b-icon> Assignment of Open Work
            Orders</span
          >
          <b-button class="orange-btn">Start WO</b-button>
        </div>
        <div class="p-3 bg-white shadow-lg">
          <b-button
            pill
            :class="`${
              listTypeActive == list.id ? 'shadow' : ''
            } mx-1 list-main-btn ft-14`"
            v-for="(list, index) in listTypeOption"
            :key="index"
            @click="listTypeActive = list.id"
            ><b-icon :icon="list.icon"></b-icon> {{ list.name }}</b-button
          >
          <b-button
            pill
            class="mx-1 list-main-btn ft-14"
            @click="$refs.Chart.show()"
            ><b-icon icon="bar-chart-line-fill"></b-icon> Chart</b-button
          >
          <p class="mt-3 h4">
            {{
              listTypeActive == 0
                ? "List Table"
                : "Carlendar => Overload data make to slow process => keep index 0 - 99"
            }}
          </p>
          <TableList
            v-if="listTypeActive == 0"
            :filter="filter"
            :items="items"
            :rows="rows"
            :isBusy="isBusy"
            @pagination="pagination"
            @hanndleChangePerpage="hanndleChangePerpage"
          />
          <Carlendar v-if="listTypeActive == 1" :event="list" />
          <Chart :data="list" ref="Chart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OtherLoading from "@/components/loading/OtherLoading";
import TaskPanel from "./components/taskPanel.vue";
import TableList from "./components/TableList.vue";
import Carlendar from "./components/Carlendar.vue";
import Chart from "./components/Chart.vue";
export default {
  name: "Home",
  components: { OtherLoading, TaskPanel, TableList, Carlendar, Chart },
  data() {
    return {
      active: 0,
      filter: {
        pageNo: 1,
        perPage: 10,
      },
      list: [],
      items: [],
      rows: 0,
      listTypeActive: 0,
      listTypeOption: [
        {
          id: 0,
          name: "List",
          icon: "card-list",
        },
        {
          id: 1,
          name: "Calendar",
          icon: "calendar-check",
        },
      ],
      taskList: [
        {
          title: "Upcomming Tasks",
          value: "1",
          color: "text-success",
          icon: "exclamation-circle",
        },
        {
          title: "Late Tasks",
          value: "5",
          color: "text-warning",
          icon: "alarm",
        },
        {
          title: "Open Tasks",
          value: "0",
          color: "text-success",
          icon: "arrow-left-right",
        },
        {
          title: "Completed Tasks",
          value: "1",
          color: "text-success",
          icon: "check2",
        },
        {
          title: "Overdue Tasks",
          value: "2",
          color: "text-danger",
          icon: "alarm",
        },
        {
          title: "Time Spent",
          value: "24 hr",
          color: "text-dark",
          icon: "clock",
        },
      ],
      isBusy: false,
      isLoading: false,
    };
  },
  async created() {
    this.isLoading = true;
    await this.getData();
    this.isLoading = false;
  },
  methods: {
    getData() {
      this.isBusy = true;
      this.axios
        .get("https://swdapi.ddns.net:8090/data/ttntest")
        .then((data) => {
          if (data.status == 200) {
            this.list = data.data;
            this.rows = data.data.length;
            this.items = [];
            let start = (this.filter.pageNo - 1) * this.filter.perPage;
            for (let i = 0; i < this.filter.perPage; i++) {
              if (this.list[start + i]) {
                this.items.push(this.list[start + i]);
              }
            }
          } else {
            console.log(data.statusText);
          }
          this.isBusy = false;
        })
        .catch(function (error) {
          this.isBusy = false;
          console.log(error);
        });
    },
    pagination(page) {
      this.filter.pageNo = page;
      this.getData();
    },
    hanndleChangePerpage(value) {
      this.filter.pageNo = 1;
      this.filter.perPage = value;
      this.getData();
    },
  },
};
</script>

<style scoped>
.ft-14 {
  font-size: 14px !important;
}
::v-deep .btn-select.custom-select-lg {
  height: 55px;
  font-size: 1rem;
}
</style>
