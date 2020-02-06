<template>
  <header id="home">
    <section class="jumbotron-two">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-5">
            <h1 class="display-5">{{ title }}</h1>
            <p class="text-muted mb-3">
              {{ text }}
            </p>
            <p>
              <a href="#signup" class="btn btn-xl btn-primary"
                >Get started free</a
              >
            </p>
          </div>
          <div class="col-12 col-md-7 my-3 my-md-lg">
            <img
              src="../assets/images/screen2.jpg"
              alt="image"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="bg-shape"></div>
    <div class="bg-circle"></div>
    <div class="bg-circle-two"></div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-circle-two {
  top: 80px;
}
</style>
