<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="contact">
              <span>Features</span>
              <li>
                <a href="#">Customer Data</a>
              </li>

              <li>
                <a href="#">Personalization</a>
              </li>

              <li>
                <a href="#">Engagement</a>
              </li>

              <li>
                <a href="#">Optimization</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="contact">
              <span>Resources</span>
              <li>
                <a href="#">User Manual</a>
              </li>

              <li>
                <a href="#">API Reference</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="contact">
              <span>Company</span>
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Careers</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <div class="copyrights text-center">
      &copy; 2021 Sendhive. All rights reserved.
      <a href="">Privacy Policy</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
footer {
  margin-top: 25px;
  color: #fff;
  background-color: #363636;
  padding: 70px 0px;
}

footer a {
  color: #ddd;
  text-decoration: none;
  background-color: transparent;
}

footer ul li {
  padding: 5px 0px;
}

.contact span {
  color: #fff;
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
  background-color: #2f2e2e;
  color: #fff;
  padding: 15px 0 15px 0;
}
.copyrights a {
  color: #da5127;
}
</style>
