<template>
  <FullCalendar v-if="isShow" :options="calendarOptions" />
</template>

<script>
import "@fullcalendar/core/vdom";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
export default {
  name: "Carlendar",
  components: { FullCalendar },
  props: {
    event: {
      type: Array,
      isRequired: true,
    },
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        initialDate: this.event[0].timestamp,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,listDay",
        },
        editable: false,
        selectable: true,
        weekends: true,
        events: [],
      },
      isShow: false,
    };
  },
  async created() {
    await this.mapCalendar();
    this.isShow = true;
  },
  methods: {
    mapCalendar() {
      this.event.forEach((e, index) => {
        if (index < 100) {
          //   overload data make to slow process => keep index 0 - 99
          this.calendarOptions.events.push({
            title: `${e.id}(${e.data})`,
            date: e.timestamp,
          });
        }
      });
    },
  },
};
</script>

<style scoped></style>
