<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <h1 class="headline">Automate your ecommerce marketing at scale.</h1>
        <p class="sub-headline">
          Sendhive is your ecommerce marketing engine. Build personalized
          customer experiences, drive more revenue, and take your marketing
          strategy to the next level with Sendhive.
        </p>

        <form class="newsletter-form">
          <input
            class="newsletter-input"
            type="email"
            name="member[email]"
            id="member_email"
            required=""
            placeholder="Email address"
          />
          <input
            class="button newsletter-button btn-outline-primary"
            type="submit"
            value="Try for Free"
          />
        </form>

        <div class="col-md-12 text-center">
          <small
            >By submitting, you agree to receive emails from Sendhive.</small
          >
        </div>
      </div>

      <div class="col-md-6 d-none d-sm-block">
        <img
          src="../assets/hero@2x.png"
          class="img-fluid"
          alt="Responsive image"
        />
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

<style lang="css" scoped>
.headline,
.sub-headline {
  padding-left: 10px;
}
</style>
