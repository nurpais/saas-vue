<template>
  <div class="section" id="signup">
    <div class="container">
      <div class="section-title text-center">
        <h3>Start your free trial</h3>
      </div>
      <div class="row justify-content-md-center">
        <div class="col col-md-5">
          <form>
            <div class="form-group">
              <input
                ref="name"
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Full Name"
              />
            </div>
            <div class="form-group">
              <input
                ref="email"
                type="email"
                class="form-control"
                v-model="email"
                placeholder="Email Address"
              />
            </div>
            <div class="form-group">
              <button
                @click.prevent="submitForm"
                type="submit"
                class="btn btn-xl btn-block btn-primary"
              >
                GET STARTED FOR FREE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppForm",
  data() {
    return {
      name: "",
      email: ""
    };
  },
  methods: {
    submitForm() {
      if (!this.name) {
        this.$refs.name.classList.add("input-error");
        setTimeout(() => {
          this.$refs.name.classList.remove("input-error");
        }, 1000);
      }
      if (!this.email) {
        this.$refs.email.classList.add("input-error");
        setTimeout(() => {
          this.$refs.email.classList.remove("input-error");
        }, 1000);
      }
      if (this.name && this.email) {
        console.log(this.name, this.email);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input-error {
  border: 1px solid #dc3545 !important;
}
</style>
