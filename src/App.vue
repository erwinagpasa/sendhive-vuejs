<template>
  <div id="app">
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
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100;1,300&display=swap");
html,
body {
  height: 100%;
  display: -ms-flexbox;
  -ms-flex-align: center;
  background-color: #e6e6e6;
  font-family: "Roboto", sans-serif;
}

.container {
  max-width: 80% !important;
}

a {
  color: #333;
}

a:hover {
  color: #da5127;
  text-decoration: none;
}
.navbar {
  padding: 10px 20px;
}

.btn-outline-primary {
  padding: 8px 30px 8px 30px;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #da5127;
  background: #da5127;
}

.btn-outline-primary:hover {
  background: #363636;
  border: 1px solid #363636;
}
.newsletter-form {
  position: relative;
  max-width: 550px;
  margin: 0 auto;
  box-sizing: border-box;
}
.newsletter-input {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 80px 15px 20px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.newsletter-input:focus {
  outline: none;
  border-color: #ff8900;
}
.newsletter-button.button {
  position: absolute;
  padding: 4px 40px;
  margin: 0;
  height: calc(100% - 8px);
  right: 4px;
  top: 4px;
}

.container-fluid {
  max-width: 1200px;
}
.headline {
  margin-top: 60px;
}

.newsletter-input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 80px 10px 20px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.btn.active,
.btn:active,
button:active,
button:focus,
button:hover,
input:active,
input:focus,
input:hover,
textarea:active,
textarea:focus,
textarea:hover {
  outline: 0 !important;
  box-shadow: none !important;
}

.form-signin {
  width: 100%;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control,
.form-signup .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  outline: 0;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

.no-radius {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: none;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
