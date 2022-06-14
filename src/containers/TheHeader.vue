<template>
  <div>
    <b-navbar class="px-2 header-container">
      <b-row class="w-100">
        <b-col sm="6" class="d-flex justify-content-start">
          <div class="toggle-menu pointer">
            <b-icon
              icon="list"
              scale="2"
              class="toggle-menu-btn"
              @click="toggleSidebar"
            ></b-icon>
          </div>
        </b-col>
        <b-col sm="6" class="d-flex justify-content-end">
          <div class="text-right">
            <!-- <label>Tanakron Srinarongsuk</label> -->
          </div>
        </b-col>
      </b-row>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {};
  },
  created: async function () {},
  methods: {
    toggleSidebar() {
      this.$store.dispatch(
        "toggleSideBar",
        !this.$store.getters.getSideBarStatus()
      );
    },
  },
};
</script>

<style scoped>
.header-container {
  height: 10vh;
  background-color: #666666;
}
.toggle-menu {
  padding-left: 15px;
}
.toggle-menu-btn {
  color: white;
}
</style>
