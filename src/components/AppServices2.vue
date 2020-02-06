<template>
  <div class="section bg-light py-lg">
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-lg-4"
          v-for="(data, index) in serviceData"
          :key="index"
        >
          <div class="media">
            <div class="media-body text-center">
              <div class="color-icon mb-3">
                <i :class="data.iconClass"></i>
              </div>
              <h5 class="mt-0">{{ data.title }}</h5>
              {{ data.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppServices2",
  props: {
    serviceData: {
      type: Array,
      required: true
    }
  }
};
</script>
