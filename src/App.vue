<template>
  <div id="app">
    <!-- Loader component -->
    <app-loader />
    <!-- Header component -->
    <app-nav v-if="!nav" />
    <!-- Content -->
    <router-view />
    <!-- Footer component -->
    <app-footer />
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppLoader from "@/components/AppLoader.vue";
export default {
  name: "App",
  components: {
    AppNav,
    AppFooter,
    AppLoader
  },
  computed: {
    nav() {
      return this.$route.meta.nav;
    }
  }
};
</script>
