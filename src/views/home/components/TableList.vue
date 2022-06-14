<template>
  <div>
    <b-table
      responsive
      class="text-center mb-0"
      :fields="fields"
      :items="items"
      :busy="isBusy"
      show-empty
      empty-text="ไม่พบข้อมูล"
    >
      <template v-slot:cell(id)="data">
        <p class="m-0" v-if="data.item.id">
          {{ data.item.id }}
        </p>
        <p v-else class="m-0">-</p>
      </template>
      <template v-slot:cell(data)="data">
        <p class="m-0" v-if="data.item.data">
          {{ data.item.data }}
        </p>
        <p v-else class="m-0">-</p>
      </template>
      <template v-slot:cell(timestamp)="data">
        <div v-if="data.item.timestamp">
          {{ new Date(data.item.timestamp) | moment("DD-MM-YYYY HH:mm:ss") }}
        </div>
        <div v-else><p class="m-0">-</p></div>
      </template>
      <template v-slot:cell(data2)="data">
        <p class="m-0" v-if="data.item.data2">
          {{ data.item.data2 }}
        </p>
        <p v-else class="m-0">-</p>
      </template>
      <template v-slot:table-busy>
        <div class="text-center text-black my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong class="ml-2">Loading...</strong>
        </div>
      </template>
    </b-table>
    <b-row class="mt-4" v-if="!isBusy">
      <b-col class="form-inline justify-content-end">
        <div class="d-flex justify-content-end">
          <b-pagination
            v-model="filter.pageNo"
            :total-rows="rows"
            :per-page="filter.perPage"
            class="m-md-0 page-item"
            @change="pagination"
          ></b-pagination>
          <b-form-select
            class="page-item select-btn"
            v-model="filter.perPage"
            @change="hanndleChangePerpage"
            :options="pageOptions"
          ></b-form-select>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "TablePanel",
  props: {
    filter: {
      type: Object,
      isRequired: true,
    },
    items: {
      type: Array,
      isRequired: true,
    },
    rows: {
      type: Number,
      isRequired: true,
    },
    isBusy: {
      type: Boolean,
      isRequired: true,
    },
  },
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "id",
          class: "text-nowrap",
        },
        {
          key: "data",
          label: "data",
          class: "text-nowrap",
        },
        {
          key: "timestamp",
          label: "timestamp",
          class: "text-nowrap",
        },
        {
          key: "data2",
          label: "data2",
          class: "text-nowrap",
        },
      ],
      pageOptions: [
        { value: 10, text: "10 / page" },
        { value: 30, text: "30 / page" },
        { value: 50, text: "50 / page" },
        { value: 100, text: "100 / page" },
      ],
    };
  },
  methods: {
    pagination(page) {
      this.$emit("pagination", page);
    },
    hanndleChangePerpage(value) {
      this.$emit("hanndleChangePerpage", value);
    },
  },
};
</script>

<style scoped></style>
