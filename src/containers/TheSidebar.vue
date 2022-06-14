<template>
  <div>
    <b-sidebar
      v-model="openSideBar"
      id="sidebar-backdrop"
      title="Menu"
      bg-variant="dark"
      backdrop-variant="dark"
      no-close-on-backdrop
      no-close-on-esc
      no-header-close
      no-header
      backdrop
      shadow
    >
      <div class="px-3 py-3 sidebar-container">
        <div class="w-100">
          <strong class="title-sidebar text-mini-title white-color">Menu</strong>
          <b-icon
            icon="x-circle-fill"
            class="mt-2 float-end close-icon pointer white-color"
            @click="hide"
          ></b-icon>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
  computed: {
    sideBarStatus() {
      return this.$store.getters.getSideBarStatus();
    },
  },
  watch: {
    sideBarStatus: {
      handler() {
        this.openSideBar = this.$store.getters.getSideBarStatus();
      },
    },
  },
  data() {
    return {
      openSideBar: false,
    };
  },
  created() {
    // this.intervalid1 = setInterval(function(){
    //     console.log('this.openSideBar', this.openSideBar)
    // }.bind(this), 3000);
  },
  methods: {
    hide() {
      this.$store.dispatch("toggleSideBar");
    }
  },
};
</script>

<style scoped></style>
