<template>
  <div>
    <header
      id="home"
      data-parallax="scroll"
      data-speed="0.5"
      data-image-src="images/blog-single.jpg"
    >
      <!-- navbar -->
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light navbar-transparent"
      >
        <div class="container">
          <router-link class="navbar-brand" :to="{ name: 'home' }">
            <h3 class="gradient-mask">Start.ly</h3></router-link
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
                <router-link class="nav-link" :to="{ name: 'home' }"
                  >← Back to Home</router-link
                >
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
          <h1 class="display-4">Content Planning and Strategy</h1>
          <p class="lead my-4">
            by John Mickey on July 10 • <a href="#comments">3 comments</a>
          </p>
        </div>
        <!-- // end .scroll-down -->
      </section>
      <!-- // end hero -->
    </header>
    <div class="section my-4" id="blog">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="entry-content">
              <p class="lead">
                Assertively create innovative intellectual capital after
                top-line bandwidth. Monotonectally promote robust collaboration
                and idea-sharing rather than flexible technologies.
                Progressively utilize cutting-edge experiences.
              </p>
              <p>
                Interactively reintermediate efficient materials after superior
                interfaces. Professionally fashion value-added convergence
                before excellent process improvements. Dramatically leverage
                existing reliable initiatives before leveraged ideas.
                Rapidiously develop equity invested expertise rather than
                enabled channels. Monotonectally reintermediate distinctive
                networks before highly efficient core competencies.
              </p>
              <blockquote class="blockquote">
                <p class="my-0">
                  Phosfluorescently evolve performance based initiatives without
                  goal-oriented materials. Globally expedite enterprise-wide
                  intellectual capital whereas installed base outsourcing.
                </p>
              </blockquote>
              <p>
                Reintermediate efficient materials after superior interfaces.
                Professionally fashion value-added convergence before excellent
                process improvements. Dramatically leverage existing reliable
                initiatives before leveraged ideas. Rapidiously develop equity
                invested expertise rather than enabled channels. Monotonectally
                reintermediate distinctive networks before highly efficient core
                competencies.
              </p>
              <h2>Seamlessly promote flexible growth strategies.</h2>
              <p>
                <img src="images/blog-1.jpg" alt="blog" class="alignleft" />
                Dramatically harness extensive value through fully researched
                human capital. Seamlessly transition premium schemas vis-a-vis
                efficient convergence. Intrinsicly build competitive e-commerce
                with cross-unit information. Collaboratively e-enable real-time
                processes before extensive technology. Authoritatively fabricate
                efficient metrics after intuitive quality vectors.
              </p>
              <p>
                Collaboratively deliver optimal vortals whereas
                backward-compatible models. Globally syndicate diverse
                leadership rather than high-payoff experiences. Uniquely
                pontificate unique metrics for cross-media human capital.
                Completely procrastinate professional collaboration and
                idea-sharing rather than 24/365 paradigms. Phosfluorescently
                initiate multimedia based outsourcing before interoperable
                benefits.
              </p>
              <h3>Seamlessly promote flexible growth strategies.</h3>
              <p>
                Progressively leverage other's e-business functionalities
                through corporate e-markets. Holisticly repurpose timely systems
                via seamless total linkage. Appropriately maximize impactful
                "outside the box" thinking vis-a-vis visionary value.
                Authoritatively deploy interdependent technology through
                process-centric "outside the box" thinking. Interactively
                negotiate pandemic internal or "organic" sources whereas
                competitive relationships.
              </p>
              <figure class="wp-caption">
                <img src="images/wide-img.jpg" alt="wide" class="alignnone" />
                <figcaption class="wp-caption-text">
                  Keep working until you find success.
                </figcaption>
              </figure>
              <p>
                Enthusiastically deliver viral potentialities through
                multidisciplinary products. Synergistically plagiarize
                client-focused partnerships for adaptive applications.
                Seamlessly morph process-centric synergy whereas
                bricks-and-clicks deliverables. Continually disintermediate
                holistic action items without distinctive customer service.
                Enthusiastically seize enterprise web-readiness without
                effective schemas.
              </p>
              <h4>Seamlessly promote flexible growth strategies.</h4>
              <p>
                Assertively restore installed base data before sustainable
                platforms. Globally recaptiualize orthogonal systems via
                clicks-and-mortar web services. Efficiently grow visionary
                action items after collaborative e-commerce. Efficiently
                architect highly efficient "outside the box" thinking before
                customer directed infomediaries. Proactively mesh holistic human
                capital rather than exceptional niches.
              </p>
              <p>
                Intrinsicly create innovative value and pandemic resources.
                Progressively productize turnkey e-markets and economically
                sound synergy. Objectively supply turnkey imperatives vis-a-vis
                high standards in outsourcing. Dynamically exploit unique
                imperatives with dynamic systems. Appropriately formulate
                technically sound users and excellent expertise.
              </p>
              <p>
                Competently redefine long-term high-impact relationships rather
                than effective metrics. Distinctively maintain impactful
                platforms after strategic imperatives. Intrinsicly evolve
                mission-critical deliverables after multimedia based e-business.
                Interactively mesh cooperative benefits whereas distributed
                process improvements. Progressively monetize an expanded array
                of e-services whereas.
              </p>
            </div>
          </div>
          <!-- // end .col-md-8 -->
        </div>
        <!-- // end .row justify-content-center -->
        <div class="media author-box">
          <img
            class="d-flex mr-3 rounded-circle"
            src="images/thumb3.jpg"
            alt="Author"
          />
          <div class="media-body">
            <h5 class="mt-0">Linda Carter</h5>
            Project Lead at Startly. I swim, cycle, and run a lot. When I’m not
            doing all those, I love to read and try new things.
            <br />
            <div class="mt-2"><a href="#">Follow me on Twitter →</a></div>
          </div>
        </div>
        <div id="comments" class="comments-area">
          <h3 class="display-5 text-center my-5">3 Comments</h3>
          <ol class="comment-list list-unstyled">
            <li class="media comment">
              <img class="d-flex avatar" src="images/thumb2.jpg" alt="image" />
              <div class="media-body">
                <h5 class="mt-0 mb-1">Charles Lewis</h5>
                <p>
                  <small class="text-muted"
                    >JULY 22, 2017 AT 10:40 PM <a href="#">REPLY</a></small
                  >
                </p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
                <ol class="children">
                  <li class="media comment my-4">
                    <img
                      class="d-flex avatar"
                      src="images/thumb1.jpg"
                      alt="image"
                    />
                    <div class="media-body">
                      <h5 class="mt-0 mb-1">Carol Valdez</h5>
                      <p>
                        <small class="text-muted"
                          >JULY 23, 2017 AT 11:25 AM
                          <a href="#">REPLY</a></small
                        >
                      </p>
                      Nulla vel metus scelerisque ante sollicitudin. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </li>
                </ol>
              </div>
            </li>
            <li class="media comment">
              <img class="d-flex avatar" src="images/thumb3.jpg" alt="image" />
              <div class="media-body">
                <h5 class="mt-0 mb-1">Linda Carter</h5>
                <p>
                  <small class="text-muted"
                    >JULY 25, 2017 AT 12:30 PM <a href="#">REPLY</a></small
                  >
                </p>
                Amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
          </ol>
        </div>
        <!-- // end .comments-area -->
        <div id="respond" class="comment-respond">
          <h3 class="display-5 text-center">Leave a Reply</h3>
          <form
            action="#"
            method="post"
            id="commentform"
            class="comment-form"
            novalidate=""
          >
            <p class="comment-notes text-center text-muted">
              <span id="email-notes"
                >Your email address will not be published.</span
              >
              Required fields are marked <span class="required">*</span>
            </p>
            <div class="form-group">
              <label for="comment">Comment</label>
              <textarea
                id="comment"
                name="comment"
                rows="8"
                class="form-control"
                required="required"
              ></textarea>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="author">Name <span class="required">*</span></label>
                <input
                  id="author"
                  name="author"
                  type="text"
                  size="30"
                  maxlength="245"
                  class="form-control"
                  required="required"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="email">Email <span class="required">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  size="30"
                  maxlength="100"
                  class="form-control"
                  required="required"
                />
              </div>
            </div>
            <!-- // end .row -->
            <div class="form-group">
              <label for="url">Website</label>
              <input
                id="url"
                name="url"
                type="url"
                class="form-control"
                size="30"
                maxlength="200"
              />
            </div>
            <div class="form-group pt-2">
              <input
                name="submit"
                type="submit"
                id="submit"
                class="btn btn-lg btn-block btn-primary"
                value="Post Comment"
              />
            </div>
          </form>
        </div>
      </div>
      <!-- // end .container -->
    </div>
  </div>
</template>
