<template>
  <div>
    <b-modal
      v-model="isShow"
      size="lg"
      header-class="bg-main"
      title="Chart"
      hide-footer
    >
      <div class="d-flex justify-content-center">
        <apexchart
          class="chart-panel"
          type="line"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Chart",
  props: {
    data: {
      type: Array,
      isRequired: true,
    },
  },
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [
            "2020-07-08",
            "2020-07-09",
            "2020-07-10",
            "2020-07-11",
            "2020-07-12",
            "2020-07-13",
            "2020-07-14",
          ],
          axisTicks: {
            show: true,
          },
        },
      },
      series: [
        {
          name: "data",
          data: this.mapChart(),
        },
      ],
      isShow: false,
    };
  },
  methods: {
    async show() {
      this.series[0].data = await this.mapChart();
      this.isShow = true;
    },
    mapChart() {
      let sum1 = 0;
      let length1 = 0;
      let sum2 = 0;
      let length2 = 0;
      let sum3 = 0;
      let length3 = 0;
      let sum4 = 0;
      let length4 = 0;
      let sum5 = 0;
      let length5 = 0;
      let sum6 = 0;
      let length6 = 0;
      let sum7 = 0;
      let length7 = 0;
      this.data.forEach((d) => {
        if (d.timestamp.search("2020-07-08") >= 0) {
          sum1 += d.data;
          length1 += 1;
        } else if (d.timestamp.search("2020-07-09") >= 0) {
          sum2 += d.data;
          length2 += 1;
        } else if (d.timestamp.search("2020-07-10") >= 0) {
          sum3 += d.data;
          length3 += 1;
        } else if (d.timestamp.search("2020-07-11") >= 0) {
          sum4 += d.data;
          length4 += 1;
        } else if (d.timestamp.search("2020-07-12") >= 0) {
          sum5 += d.data;
          length5 += 1;
        } else if (d.timestamp.search("2020-07-13") >= 0) {
          sum6 += d.data;
          length6 += 1;
        } else if (d.timestamp.search("2020-07-14") >= 0) {
          sum7 += d.data;
          length7 += 1;
        }
      });
      return [
        Math.floor(sum1 / length1),
        Math.floor(sum2 / length2),
        Math.floor(sum3 / length3),
        Math.floor(sum4 / length4),
        Math.floor(sum5 / length5),
        Math.floor(sum6 / length6),
        Math.floor(sum7 / length7),
      ];
    },
  },
};
</script>

<style scoped>
::v-deep button.close {
  font-size: 20px;
  color: white;
  background-color: #32c040;
  border: 1px solid #32c040;
}
.chart-panel {
  height: 100%;
  width: 100%;
}
</style>
