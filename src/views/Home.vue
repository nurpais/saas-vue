<template>
  <div>
    <!-- Header component -->
    <app-header :title="headerTitle" :text="headerText" />
    <!-- Clients component -->
    <app-clients />
    <!-- Services component -->
    <app-services :serviceData="services1" />
    <!-- Feature component -->
    <app-feature />
    <!-- Services second component -->
    <app-services2 :serviceData="services2" />
    <!-- Testimonials component-->
    <app-testimonials />
    <!-- Pricing component-->
    <app-pricing />
    <!-- Form component -->
    <app-form />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppClients from "@/components/AppClients.vue";
import AppServices from "@/components/AppServices.vue";
import AppServices2 from "@/components/AppServices2.vue";
import AppFeature from "@/components/AppFeature.vue";
import AppTestimonials from "@/components/AppTestimonials.vue";
import AppPricing from "@/components/AppPricing.vue";
import AppForm from "@/components/AppForm.vue";

import { services1, services2, headerTitle, headerText } from "@/siteData";

export default {
  name: "home",
  data() {
    return {
      services1,
      services2,
      headerTitle,
      headerText
    };
  },
  components: {
    AppHeader,
    AppClients,
    AppServices,
    AppServices2,
    AppFeature,
    AppTestimonials,
    AppPricing,
    AppForm
  }
};
</script>
