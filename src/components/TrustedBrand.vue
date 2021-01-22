<template>
  <div class="brands-wrapper">
    <h4 class="mt-5 mb-5 text-center">
      More than 8,000+ companies trust sendhive
    </h4>

    <b-container class="brands">
      <b-row>
        <b-col>
          <img alt="Vue logo" src="../assets/craft.png" />
        </b-col>
        <b-col>
          <img alt="Vue logo" src="../assets/lensabl.png" />
        </b-col>
        <b-col>
          <img alt="Vue logo" src="../assets/pit-viper.png" />
        </b-col>

        <b-col>
          <img alt="Vue logo" src="../assets/polaris.png" />
        </b-col>

        <b-col>
          <img alt="Vue logo" src="../assets/spice-house.png" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "TrustedBrand",
};
</script>

<style lang="css" scoped>
.brands-wrapper {
  background: rgb(243, 243, 243);
  padding-top: 50px;
  padding-bottom: 130px;
}
.brands img {
  width: 120px;
}
</style>
