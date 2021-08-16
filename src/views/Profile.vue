<template>
  <div>
    <Navbar />
    <div class="col-md-8 mx-auto">
      <h1 class="page-headline text-center">Complete your proﬁle</h1>

      <h5 class="mt-5"><strong>About You</strong></h5>

      <form>
        <div class="row">
          <div class="col-md-6">
            <label class="form-label">First Name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label">Last Name</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-6">
            <label class="form-label">Email Address</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <h5 class="mt-5"><strong>Organization Information</strong></h5>
        <p>
          The following information will help us automatically build email
          footers to comply with the CAN-SPAM act and International anti-spam
          laws.
        </p>

        <div class="row">
          <div class="col-md-12">
            <label class="form-label">Company/Organization Name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-md-12 mt-3">
            <label class="form-label">Address</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <label class="form-label">City</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Profile",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped></style>
