<template>
  <div class="col-md-12 no-gutters row">
    <div class="form-div2 mx-auto no-gutters mt-5">
      <div class="col-md-12 text-center mx-auto  mt-3">
        <img src="../assets/logo.png" class="mt-5" style="max-width:240px;" />
      </div>
      <form method="post" action="auth" class="form-signin">
        <h4 class="mt-3 text-center">Sign in to your account.</h4>

        <p class="text-center">
          Need a sendhive account? <a href="signup">Create an account</a>
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

        <p class="float-right"><a href="forgot">Forgot password?</a></p>

        <input type="hidden" name="formsubmitted" value="TRUE" />
        <button type="submit" class="btn btn-lg btn-info btn-block">
          Sign In
        </button>
      </form>

      <p class="mt-5 text-muted text-center">
        <small
          >&copy; Copyright 2021 - sendhive.io.<br />All rights reserved.</small
        >
      </p>

      <div class="text-center mt-5">
        <a href="index"><i class="fas fa-3x fa-chevron-circle-left"></i></a>
      </div>
    </div>
    <!--col-md-4-->

    <div class="cover col-md-8 no-gutters"></div>
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
  height: 100%;
}
body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  margin: 0;
  background-color: #e6e6e6;
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

.cover h3,
.cover p {
  color: #fff;
}

.cover h3 {
  margin-top: 20%;
}
</style>
