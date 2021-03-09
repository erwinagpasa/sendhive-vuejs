<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <router-link to="/signin" class="nav-link">Sign In</router-link>
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
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    $(window).scroll(function() {
      $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
    });
  },
};
</script>

<style lang="css" scoped>
.bg-light {
  background-color: none !important;
}

.navbar-brand img {
  width: 140px;
}
</style>
