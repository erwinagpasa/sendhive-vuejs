<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
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
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="css" scoped>
.navbar-brand img {
  width: 140px;
}

.btn-outline-primary {
  padding: 8px 30px 8px 30px !important;
  border-radius: 2em;
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
