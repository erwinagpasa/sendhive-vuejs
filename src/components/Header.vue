<template>
  <div class="container-fluid wrap-header">
    <div class="col-md-8 mt-5 mb-5 text-center mx-auto">
      <h1 class="headline">Automate your ecommerce marketing at scale.</h1>
      <p class="sub-headline">
        Sendhive is your ecommerce marketing engine. Build personalized customer
        experiences, drive more revenue, and take your marketing strategy to the
        next level with Sendhive.
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
        <small>By submitting, you agree to receive emails from Sendhive.</small>
      </div>

      <img alt="slogo" src="../assets/dev8@2x.png" class="img-fluid" />
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
.wrap-header {
  text-align: center;
  padding: 50px 0 0;
  background: #333333 url("../assets/slide.jpg") center center fixed;
  background-size: auto;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  position: relative;
  height: 800px;
  margin-bottom: 170px;
}
.headline {
  color: #fff;
  font-size: 50px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  margin: 0 0 20px;
  margin-bottom: 20px;
}

.headline,
.sub-headline {
  padding-left: 10px;
  color: #fff;
}
</style>
