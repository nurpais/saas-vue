<template>
  <div>
    <header
      id="home"
      data-parallax="scroll"
      data-speed="0.5"
      data-image-src="images/hero.jpg"
    >
      <!-- navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <router-link class="navbar-brand" :to="{ name: 'home' }"
            ><h3 class="gradient-mask">Start.ly</h3></router-link
          >
          <a href="index.html"> </a>
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
                <router-link :to="{ name: 'home' }">← Back to Home</router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- // end .container -->
      </nav>
      <!-- // end navbar -->
      <!-- hero -->
      <section class="jumbotron sub-page text-center d-flex align-items-center">
        <div class="container">
          <h1 class="display-4">Our Blog</h1>
          <p class="lead my-4" data-wow-delay="0.5s">
            A place where we speak our mind. Product Udates, Marketing, Sales
            and some fun. Subscribe for email updates.
          </p>
        </div>
      </section>
      <!-- // end hero -->
    </header>
    <div class="section my-lg" id="blog">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 col-lg-4"
            v-for="(item, index) in 6"
            :key="index"
          >
            <article class="post text-center mb-5">
              <div class="post_media_wrapper">
                <a class="title" href="blog-single.html">
                  <img class="img-fluid" alt="thumbnail" src="images/blog-1.jpg"
                /></a>
              </div>
              <div class="entry-content clearfix">
                <router-link to="/blog/1"
                  ><h4 class="post_title">
                    Content Planning and Strategy
                  </h4></router-link>

                <div class="post-meta text-muted mb-3">
                  <small class="author">
                    by <a href="#" class="link-muted">John Mickey </a></small
                  >
                  <small class="time">
                    on <a href="#" class="link-muted">July 10 </a>
                  </small>
                </div>
                <p>
                  Seamlessly restore wireless ideas before interdependent
                  e-tailers. Conveniently morph emerging quality vectors for
                  progressive catalysts for change utilize fully tested...
                </p>
              </div>
              <!-- .entry-content -->
              <router-link :to="{ name: 'single' }"
                >Continue reading →</router-link
              >
            </article>
          </div>
        </div>
        <!-- // end .row -->

        <nav>
          <ul class="pagination justify-content-center mt-3">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1"
                ><span class="pe-7s-angle-left pe-2x"></span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">
                <span class="pe-7s-angle-right pe-2x"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- // end .container -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog"
};
</script>
