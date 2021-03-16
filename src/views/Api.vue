<template>
  <div>
    <Navbar />
    <div class="inner-header">
      <div class="container ">
        <div class="row mt-5">
          <div class="col-md-6">
            <h2 class="text-white">API Reference</h2>
          </div>
          <div class="col-md-6 text-right mt-3">
            <small class="text-white">
              <router-link to="/" class="text-white">Home</router-link> / API
              Reference</small
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="col-md-12 mt-3 mb-5" style="height:400px;">
        <p>...</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Api",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped></style>
