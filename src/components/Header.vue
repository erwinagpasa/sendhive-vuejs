<template>
  <div class="container-fluid">
    <div class="wrap-header">
      <div class="row">
        <div class="col-md-6">
          fjsljskfs
        </div>

        <div class="col-md-6">
          <img alt="slogo" src="../assets/dev8@2x.png" class="img-fluid" />
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

<style lang="css" scoped>
.wrap-header {
  margin-top: 70px;
}

.sub-headline {
  color: #fff;
  font-size: 19px;
}
h1.header {
  margin-top: 65px;
  font-size: 60px !important;
  color: #fff;
}
</style>
