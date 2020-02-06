<template>
  <div class="section bg-light py-lg" id="pricing">
    <div class="container">
      <div class="section-title text-center mt-0 mb-5">
        <h3>Choose your plan</h3>
        <p>Simple pricing. no hidden charges. Choose a plan fit your needs</p>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="card pricing">
            <div class="card-body">
              <small class="text-muted">PERSONAL</small>
              <h5 class="card-title">$9</h5>
              <p class="card-text">
                <ul class="list-unstyled">
                  <li>3 Projects</li>
                  <li class="plan-muted">Team Collaboration</li>
                  <li class="plan-muted">Analytics &amp; Reports</li>
                  <li>One user</li>
                </ul>
              </p>
              <a href="#signup" class="btn btn-xl btn-outline-primary">Choose this plan</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card pricing">
            <div class="card-body">
              <small class="text-muted">STARTUP</small>
              <h5 class="card-title">$29</h5>
              <p class="card-text">
                <ul class="list-unstyled">
                  <li>20 Projects</li>
                  <li>Team Collaboration</li>
                  <li>Analytics &amp; Reports</li>
                  <li>10 Active users</li>
                </ul>
              </p>
              <a href="#signup" class="btn btn-xl btn-primary">Choose this plan</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card pricing">
            <div class="card-body">
              <small class="text-muted">ENTERPRISE</small>
              <h5 class="card-title">$149</h5>
              <p class="card-text">
                <ul class="list-unstyled">
                  <li>Unlimited Projects</li>
                  <li>Team Collaboration</li>
                  <li>Analytics &amp; Reports</li>
                  <li>Priority Support</li>
                </ul>
              </p>
              <a href="#signup" class="btn btn-xl btn-outline-primary">Choose this plan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPricing'
}
</script>