<template>
  <div
    class="text-center h-70 d-flex align-items-center justify-content-center"
  >
    <b-spinner
      label="Loading..."
      variant="dark"
      class="m-5 spinner-main"
    ></b-spinner>
  </div>
</template>

<script>
export default {
  name: "loading"
};
</script>

<style scoped>
.h-70 {
  height: 70vh;
}
</style>
