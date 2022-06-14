<template>
  <b-row>
    <b-col v-for="(task, index) in taskList" :key="index">
      <div class="p-2 bg-main shadow-lg">
        <b-icon :icon="task.icon"></b-icon> {{ task.title }}
      </div>
      <div :class="`${task.color} p-4 text-center bg-white shadow-lg`">
        <h1>{{ task.value }}</h1>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "TaskPanel",
  props: {
    taskList: {
      type: Array,
      isRequired: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
