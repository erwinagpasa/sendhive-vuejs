<template>
  <div class="col-md-4 mx-auto">
    <div class="form-div">
      <div class="col-md-12 text-center mx-auto  mt-3">
        <img src="../assets/logo.png" class="mt-5" style="max-width:240px;" />
      </div>
      <form method="post" action="auth" class="form-signup">
        <h4 class="mt-3 text-center">Get started with your account.</h4>

        <p class="text-center">
          You're one step closer to improving your overall customer service.
        </p>

        <input
          type="text"
          name=""
          class="form-control first"
          placeholder="Username"
          value=""
          required
        />

        <input
          type="text"
          name=""
          class="form-control custom"
          placeholder="Email Address"
          value=""
          required
        />

        <input
          type="text"
          name=""
          class="form-control custom"
          placeholder="Password"
          value=""
          required
        />

        <input
          type="text"
          name=""
          class="form-control custom"
          placeholder="Confirm Password"
          value=""
          required
        />
        <input
          type="text"
          name=""
          class="form-control last"
          placeholder="Invite code"
          value=""
          required
        />

        <input type="hidden" name="formsubmitted" value="TRUE" />
        <button type="submit" class="btn btn-lg btn-outline-primary btn-block">
          Let's Get Started
        </button>
      </form>

      <p class="text-center">
        <router-link to="/signin">Already have an account? Signin</router-link>
      </p>

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
  </div>
  <!--row-->
</template>

<script>
export default {
  name: "Signup",
  components: {},
};
</script>

<style scoped>
.form-div {
  background: #fff;
  padding-bottom: 20px;
}

.form-signup {
  width: 100%;
  padding: 25px;
  margin: auto;
}

.form-signup input.first {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  outline: 0;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

.form-signup input.custom {
  margin-bottom: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  outline: 0;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

.form-signup input.last {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
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
