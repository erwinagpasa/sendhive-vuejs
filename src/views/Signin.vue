<template>
  <div class="container-fluid">
    <img
      src="../assets/logo.png"
      class="ml-3 mt-3 img-fluid"
      style="max-width:180px;"
    />

    <h2 class="text-center" style="margin-top:140px;">
      Sign in to your account.
    </h2>
    <p class="text-center">
      Need a sendhive account?
      <router-link to="/signup" class="text-success">
        Create an account</router-link
      >
    </p>

    <div class="col-md-4 mx-auto">
      <form method="post" action="auth" class="form-signin">
        <input
          type="email"
          name="email"
          class="mt-3 form-control form-control-lg"
          placeholder="Email address"
          value=""
          required
        />

        <input
          type="password"
          name="password"
          class="mt-3 form-control form-control-lg"
          placeholder="Password"
          value=""
          required
        />

        <p class="float-right">
          <router-link to="/forgot">Forgot password?</router-link>
        </p>

        <input type="hidden" name="formsubmitted" value="TRUE" />
        <button type="submit" class="btn btn-lg btn-primary btn-block">
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
  </div>
  <!--row-->
</template>

<script>
export default {
  name: "Signin",
  components: {},
};
</script>

<style scoped></style>
