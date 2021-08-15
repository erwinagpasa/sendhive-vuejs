<template>
  <div class="wrap-header">
    <div class="col-md-10 mx-auto">
      <div class="row">
        <div class="col-md-6">
          <h1 id="headline">
            Automate your ecommerce marketing at scale
          </h1>
          <p>
            Sendhive is your ecommerce marketing engine. Build personalized
            customer experiences, drive more revenue, and take your marketing
            strategy to the next level with Sendhive.
          </p>
          <div class="col-md-12 no-gutters">
            <router-link to="/signup" class="btn btn-primary">
              Sign up free
            </router-link>

            <router-link to="/signup" class="ml-3 btn btn-secondary">
              Sign up free
            </router-link>
          </div>
          <small>Get free 14-day trial to premium features</small>
        </div>

        <div class="col-md-6">
          <img alt="slogo" src="../assets/hero.png" class="mt-5 img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  props: {
    msg: String,
  },
};
</script>

<style lang="css" scoped></style>
