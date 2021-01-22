<template>
  <div id="app">
    <Navbar />
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
-->
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100;1,300&display=swap");
body {
  font-family: "Roboto", sans-serif;
}
.container {
  max-width: 80% !important;
}
.btn-outline-primary {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #4fc08d;

  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}
</style>
