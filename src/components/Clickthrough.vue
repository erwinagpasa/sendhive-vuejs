<template>
  <div class="clickhtrough-wrap">
    <div class="col-md-6 mx-auto mt-5">
      <h2 class="headline text-center">
        Start now for free and get a 14-day trial to our premium features
      </h2>
      <p class="text-center">
        Sign up for SendHive today to stay focused on the reason you’re using
        email marketing in the ﬁrst place: bringing your vision to life.
      </p>
    </div>
    <div class="col-md-8 mx-auto text-center">
      <router-link to="/signup" class="btn btn-primary">
        Sign up free
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clickthrough",
};
</script>

<style lang="css" scoped>
.clickhtrough-wrap {
  background: #fff;
  padding-top: 80px;
  padding-bottom: 60px;
}
</style>
