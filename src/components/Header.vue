<template>
  <div>
 <b-container>
      <b-row>
        <b-col cols="6">
          <h1 class="headline">Automate your ecommerce marketing at scale.</h1>
          <p>Sendhive is your ecommerce marketing engine. Build personalized customer experiences, drive more revenue, and take your marketing strategy to the next level with Sendhive.</p>

          <div>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-name">Name</label>
              <b-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Your workemail"
              ></b-input>

              <b-button variant="primary">Try for free</b-button>
              
            </b-form>
            <small>By submitting, you agree to receive emails from Sendhive.</small>
          </div>
        </b-col>
        <b-col cols="6">
          <img src="../assets/hero@2x.jpg" class="img-fluid" alt="Responsive image"/>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
export default {
  name: 'Head',
  props: {
    msg: String
  }
}
</script>

<style lang="css" scoped>
.headline{
  margin-top:200px;
}
</style>