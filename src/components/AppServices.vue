<template>
  <div class="section bg-light pt-lg">
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-lg-4"
          v-for="(data, index) in serviceData"
          :key="index"
        >
          <div class="media mb-5">
            <div class="media-icon d-flex mr-3">
              <i :class="data.iconClass"></i>
            </div>
            <div class="media-body">
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
  name: "AppServices",
  props: {
    serviceData: {
      type: Array,
      required: true
    }
  }
};
</script>
