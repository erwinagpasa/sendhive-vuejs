<template>
  <div class="brands-wrapper">
    <h4 class="mt-5 mb-5 text-center">
      More than 8,000+ companies trust sendhive
    </h4>

    <div class="container brands">
      <div class="row">
        <div class="col"><img alt="Vue logo" src="../assets/craft.png" /></div>

        <div class="col">
          <img alt="Vue logo" src="../assets/lensabl.png" />
        </div>
        <div class="col">
          <img alt="Vue logo" src="../assets/pit-viper.png" />
        </div>
        <div class="col">
          <img alt="Vue logo" src="../assets/polaris.png" />
        </div>
        <div class="col">
          <img alt="Vue logo" src="../assets/spice-house.png" />
        </div>
      </div>
    </div>
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
