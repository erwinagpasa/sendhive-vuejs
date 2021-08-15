<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="contact">
              <span>Legal</span>
              <li>
                <router-link to="/terms">Terms of Use</router-link>
              </li>

              <li>
                <router-link to="/privacy">Privacy Policy</router-link>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="contact">
              <span>Resources</span>
              <li>
                <router-link to="/manual">User Manual</router-link>
              </li>

              <li>
                <router-link to="/api">API Reference</router-link>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="contact">
              <span>Company</span>
              <li>
                <router-link to="/">About</router-link>
              </li>

              <li>
                <router-link to="/">Careers</router-link>
              </li>

              <li>
                <router-link to="/">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <div class="copyrights text-center">
      <p>
        Address: 5 Cypress Point Dr. Mountain View, CA 94043 USA<br />
        Email:support@sendhive.io
      </p>
      <p>&copy; 2021 Sendhive. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
footer {
  margin-top: 0px;
  color: #fff;
  background-color: #7030bc;
  padding: 70px 0px;
}

footer a {
  color: #ddd !important;
  text-decoration: none;
  background-color: transparent;
}

footer ul li {
  padding: 5px 0px;
}

.contact span {
  color: #fff !important;
  padding-bottom: 10px;
  margin-bottom: 20px;
  display: block;
  text-transform: uppercase;
  font-size: 20px;
}

.contact {
  list-style: none;
}

.fa {
  color: #9c9c9c;
}

.copyrights {
  background-color: #5c289b;
  color: #fff;
  padding: 15px 0 15px 0;
}
.copyrights a {
  color: #fff !important;
}
</style>
