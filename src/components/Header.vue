<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <h1 class="headline">Automate your ecommerce marketing at scale.</h1>
        <p>
          Sendhive is your ecommerce marketing engine. Build personalized
          customer experiences, drive more revenue, and take your marketing
          strategy to the next level with Sendhive.
        </p>

        <form class="form-inline">
          <input
            class="newsletter-input"
            type="email"
            name="member[email]"
            id="member_email"
            required=""
            placeholder="Email address"
          />

          <button type="button" class="btn btn-outline-primary">
            TRY FOR FREE
          </button>
        </form>

        <small>By submitting, you agree to receive emails from Sendhive.</small>
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
.container-fluid {
  max-width: 1200px;
}
.headline {
  margin-top: 60px;
}

.newsletter-input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 80px 10px 20px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #ccc;
  font-size: 16px;
}
</style>
