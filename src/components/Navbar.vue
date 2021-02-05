<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container-fluid">
        <b-navbar-brand>
          <router-link to="/">
            <img alt="logo" src="../assets/logo.png" class="logo" />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/"
              ><router-link to="/signin">Sign In</router-link></b-nav-item
            >
            <router-link to="/signup" class="ml-3 btn btn-outline-primary">
              Sign up free
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.navbar-brand img {
  width: 140px;
}
</style>
