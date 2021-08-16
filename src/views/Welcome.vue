<template>
  <div>
    <Navbar />
    <div class="col-md-8 mx-auto">
      <h1 class="page-headline text-center">Welcome to Sendhive</h1>
      <p class="text-center">
        Lorem Ipsum has been the industry’s standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only ﬁve centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>

      <p>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>

      <div class="progressbar-wrapper">
        <ul class="progressbar">
          <li class="active">
            <router-link to="/" class="btn btn-disable btn-sm">
              Completed
            </router-link>
          </li>
          <li>
            <router-link to="/profile" class="btn btn-info btn-sm">
              Complete proﬁle
            </router-link>
          </li>
          <li>
            <router-link to="/approval" class="btn btn-info btn-sm">
              Request approval
            </router-link>
          </li>
        </ul>
      </div>
      <br /><br />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Welcome",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.btn-disable {
  background: #ddd;
  color: #999;
}
.progressbar-wrapper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 200px;
}

.progressbar li {
  list-style-type: none;
  width: 32%;
  float: left;
  font-size: 14px;
  position: relative;
  text-align: center;

  color: #7d7d7d;
}

.progressbar li:before {
  width: 40px;
  height: 40px;
  content: "";
  line-height: 35px;
  border: 4px solid #7d7d7d;
  display: block;
  text-align: center;
  margin: 0 auto 13px auto;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  background: #fafafa;
}
.progressbar li:after {
  width: 100%;
  height: 8px;
  content: "";
  position: absolute;
  background-color: #7d7d7d;
  top: 16px;
  left: -50%;
  z-index: 0;
}
.progressbar li:first-child:after {
  content: none;
}

.progressbar li.active {
  color: green;
  font-weight: bold;
}
.progressbar li.active:before {
  border-color: #55b776;
  background: green;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f00c";
  color: #fff;
}
.progressbar li.active + li:after {
  background-color: #55b776;
}

.progressbar li.active:before {
  background: #55b776;
  background-size: 60%;
}
.progressbar li::before {
  background: #fafafa;
  background-size: 60%;
}

.progressbar {
  counter-reset: step;
}
.progressbar li:before {
  content: "";
}
</style>
