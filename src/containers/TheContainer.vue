<template>
  <div>
    <transition name="fade">
    </transition>
    <div class="c-app">
      <TheSidebar />
      <div class="c-wrapper">
        <TheHeader />
        <div class="container-body">
          <main class="c-main">
            <!-- <CContainer fluid> -->
              <transition name="fade">
                <router-view :key="$route.fullPath"></router-view>
              </transition>
            <!-- </CContainer> -->
          </main>
        </div>
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";

export default {
  name: "TheContainer",
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      onload: true,
      isUseClass: true,
    };
  },
  methods: {

  },
  created: function () {

  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
