<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container-fluid">
        <b-navbar-brand href="#"
          ><img alt="logo" src="../assets/logo.png" class="logo"
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Sign In</b-nav-item>
            <button type="button" class="btn btn-outline-primary">
              Sign up free
            </button>
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
