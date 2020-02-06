<template>
  <div id="app">
    <!-- Header component -->
    <app-nav v-if="!nav" />

    <router-view />
    <!-- Footer component -->
    <app-footer />
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppFooter
  },
  computed: {
    nav() {
      return this.$route.name === "blog";
    }
  }
};
</script>
