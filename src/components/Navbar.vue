<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid">
      <router-link to="/">
        <img alt="logo" src="../assets/logo.png" class="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/signin" class="nav-link">Login</router-link>
          </li>

          <li class="nav-item">
            <router-link
              to="/signup"
              class="nav-link ml-3 btn btn-outline-primary"
            >
              Sign up free
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="css" scoped>
/* moved */
</style>
