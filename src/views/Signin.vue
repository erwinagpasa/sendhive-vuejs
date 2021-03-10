<template>
  <div class="col-md-12 no-gutters row">
    <div class="form-div2 mx-auto no-gutters">
      <div class="col-md-12 text-center mx-auto  mt-3">
        <img src="../assets/logo.png" class="mt-5" style="max-width:240px;" />
      </div>
      <form method="post" action="auth" class="form-signin">
        <h4 class="mt-3 text-center">Sign in to your account.</h4>

        <p class="text-center">
          Need a sendhive account?
          <router-link to="/signup">Create an account</router-link>
        </p>

        <input
          type="email"
          name="email"
          class="form-control"
          placeholder="Email address"
          value=""
          required
        />

        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="Password"
          value=""
          required
        />

        <p class="float-right">
          <router-link to="/forgot">Forgot password?</router-link>
        </p>

        <input type="hidden" name="formsubmitted" value="TRUE" />
        <button type="submit" class="btn btn-lg btn-outline-primary btn-block">
          Sign In
        </button>
      </form>
      <div class="text-center">
        <router-link to="/">
          <i class="mt-5 fas fa-chevron-circle-left text-secondary fa-2x"></i>
        </router-link>
      </div>

      <p class="mt-5 text-muted text-center">
        <small
          >&copy; Copyright 2021 - sendhive.io.<br />All rights reserved.</small
        >
      </p>
    </div>
    <!--col-md-4-->

    <div class="cover col-md-8 no-gutters">
      <div class="inner-cover"></div>
    </div>
    <!--col-md-8-->
  </div>
  <!--row-->
</template>

<script>
export default {
  name: "Signin",
  components: {},
};
</script>

<style scoped>
@media (max-width: 992px) {
  .inner-cover {
    display: none !important;
  }
}

.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;
}

.form-div2 {
  display: -webkit-box;
  display: -ms-flexbox;
  height: 100vh;
}

.cover {
  background-image: url(../assets/cover.jpg);
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
.inner-cover {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: 100vh;
}
.cover h3,
.cover p {
  color: #fff;
}

.cover h3 {
  margin-top: 20%;
}

.btn-outline-primary {
  padding: 8px 30px 8px 30px !important;
  display: inline-block;
  color: #fff !important;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #da5127 !important;
  background: #da5127;
}

.btn-outline-primary:hover {
  background: #363636 !important;
  border: 1px solid #363636 !important;
}
</style>
