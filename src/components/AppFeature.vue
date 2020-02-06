<template>
  <div class="section" id="features">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-8">
          <div class="browser-window limit-height my-5 mr-0 mr-sm-5">
            <div class="top-bar">
              <div class="circles">
                <div class="circle circle-red"></div>
                <div class="circle circle-yellow"></div>
                <div class="circle circle-blue"></div>
              </div>
            </div>
            <div class="content">
              <img src="images/dashboard.png" alt="image" />
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="media">
            <div class="media-body">
              <div class="media-icon mb-3">
                <i class="pe-7s-like2 pe-3x"></i>
              </div>
              <h3 class="mt-0">Perfect Dashboard</h3>
              <p>
                Reprehenderit nemo quod tempore doloribus ratione distinctio
                quis quidem vitae sunt reiciendis, molestias omnis soluta?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row align-items-center mt-5">
        <div class="col-sm-4">
          <div class="media">
            <div class="media-body">
              <div class="media-icon mb-3">
                <i class="pe-7s-graph1 pe-3x"></i>
              </div>
              <h3 class="mt-0">Charts, Diagrams & more</h3>
              <p>
                Reprehenderit nemo quod tempore doloribus ratione distinctio
                quis quidem vitae sunt reiciendis, molestias omnis soluta?
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <img
            src="images/screen.jpg"
            alt="image"
            class="img-fluid cast-shadow my-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFeature"
};
</script>
