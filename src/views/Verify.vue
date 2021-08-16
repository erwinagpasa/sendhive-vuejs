<template>
  <div class="wrapper">
    <Navbar />
    <div class="col-md-8 mx-auto">
      <h1 class="text-center">Request for approval</h1>
      <h5 class="mt-5"><strong>Verify your website ownership</strong></h5>
      <p>
        Lorem Ipsum has been the industry’s standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>

      <form class="mb-5">
        <div class="row mt-3">
          <div class="col-md-6 mb-3">
            <label for="validationDefaultUsername">Email</label>
            <div class="input-group">
              <input type="text" class="form-control" />
              <div class="input-group-prepend">
                <span class="input-group-text">@mydomain.com</span>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="mt-3 btn btn-primary">Next</button>
        <router-link to="/welcome" class="mt-3 btn btn-link"
          ><u>or Go Back</u></router-link
        >
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Verify",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.wrapper {
  padding-top: 100px;

  background: #fafafa;
}

.checkbox-lg .custom-control-label::before,
.checkbox-lg .custom-control-label::after {
  top: 0.8rem;
  width: 1.55rem;
  height: 1.55rem;
}

.checkbox-lg .custom-control-label {
  padding-top: 13px;
  padding-left: 6px;
}
</style>
