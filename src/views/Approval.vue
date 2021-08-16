<template>
  <div class="wrapper">
    <Navbar />
    <div class="col-md-8 mx-auto">
      <h1 class="text-center">Request for approval</h1>
      <h5 class="mt-5"><strong>Veriﬁcation</strong></h5>
      <p>
        Lorem Ipsum has been the industry’s standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <p>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>

      <form class="mb-5">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Please select a veriﬁcation method</label>
              <select class="form-control">
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <label class="form-label">Website URL</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <router-link to="/verify" class="mt-3 btn btn-primary"
          >Next</router-link
        >
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
  name: "Approval",
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
