<template>
  <div id="loader" class="loader" ref="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #6565fd;
  z-index: 999;
  transform: translateX(-100%);
}
</style>

<script>
export default {
  name: "AppLoader"
};
</script>
