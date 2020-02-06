<template>
  <div class="section bg-light mt-4" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img
            src="images/global/logo-dark.svg"
            class="logo-dark"
            alt="Start.ly Logo"
          />
          <p class="mt-3 ml-1 text-muted">
            Start.ly is a SASS software landing page template.
          </p>
          <p class="ml-1">
            <a
              href="https://themeforest.net/user/surjithctly/portfolio?ref=surjithctly&utm_source=footer_content"
              target="_blank"
              >Purchase now →</a
            >
          </p>
        </div>

        <div class="col-sm-2">
          <ul class="list-unstyled footer-links ml-1">
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="col-sm-2">
          <ul class="list-unstyled footer-links ml-1">
            <li><a href="#">Terms</a></li>
            <li><a href="#about">Privacy</a></li>
          </ul>
        </div>
        <div class="col-sm-2">
          <ul class="list-unstyled footer-links ml-1">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Linkedin</a></li>
          </ul>
        </div>
        <div class="col-sm-2">
          <a href="#app" class="btn btn-sm btn-outline-primary ml-1"
            >Go to Top</a
          >
        </div>
      </div>
      <div class=" text-center mt-4">
        <small class="text-muted"
          >Copyright ©
          {{ new Date().getFullYear() }}
          All rights reserved. Start.ly
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>
