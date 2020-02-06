<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        ><h3 class="gradient-mask">Grow.ly</h3></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#site-nav"
        aria-controls="site-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="site-nav">
        <ul class="navbar-nav text-sm-left ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#features">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pricing">Pricing</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'blog' }"
              >Blog</router-link
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#signup">Help</a>
          </li>

          <li class="nav-item text-center">
            <a href="#signup" class="btn align-middle btn-primary my-2 my-lg-0"
              >free trial</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNav"
};
</script>
