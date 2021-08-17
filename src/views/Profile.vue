<template>
  <div class="wrapper">
    <Navbar />
    <div class="col-md-8 mx-auto">
      <h1 class="text-center">Complete your proﬁle</h1>
      <h5 class="mt-5"><strong>About You</strong></h5>
      <form class="mb-5">
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
          <div class="col-md-6">
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

        <div class="row mt-3">
          <div class="col-md-12">
            <label class="form-label">Company/Organization Name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-md-12 mt-3">
            <label class="form-label">Address</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <label class="form-label">City</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Country</label>
              <select class="form-control">
                <option>Philippines</option>
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
            <label class="form-label"
              >When was the last time you sent a campaign/newsletter?</label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>How many subscribers do you have?</label>
              <select class="form-control">
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>

        <h5 class="mt-5"><strong>How do you collect subscribers?</strong></h5>
        <p>
          This information is very important for us to review, so please explain
          in details how you gather email and how subscribers give their consent
          To receive emails from you. If you use external web forms or trade
          shows, please provide links and names for them.
        </p>

        <div class="custom-control custom-checkbox checkbox-lg">
          <input type="checkbox" class="custom-control-input" checked="" />
          <label class="custom-control-label"
            >Opt-in via online or oﬄine forms</label
          >
        </div>
        <div class="custom-control custom-checkbox checkbox-lg">
          <input type="checkbox" class="custom-control-input" />
          <label class="custom-control-label"
            >Permission-based via social media or webinars</label
          >
        </div>
        <div class="custom-control custom-checkbox checkbox-lg">
          <input type="checkbox" class="custom-control-input" />
          <label class="custom-control-label"
            >E-commerce (subscribers purchased a product or service in the
            past)</label
          >
        </div>

        <div class="custom-control custom-checkbox checkbox-lg">
          <input type="checkbox" class="custom-control-input" />
          <label class="custom-control-label"
            >I have purchased a list without consent from 3rd party service or
            obtained a list from public sources</label
          >
        </div>

        <div class="custom-control custom-checkbox checkbox-lg">
          <input type="checkbox" class="custom-control-input" />
          <label class="custom-control-label"
            >I have yet to start collecting subscribers</label
          >
        </div>
        <div class="custom-control custom-checkbox checkbox-lg">
          <input type="checkbox" class="custom-control-input" />
          <label class="custom-control-label"
            >Other (share other or elaborate on selected methods)</label
          >
        </div>

        <div class="row mt-5">
          <div class="col-md-12">
            <label
              ><strong
                >What content do you plan to send to your subscribers or add to
                landing pages and websites?</strong
              ></label
            >
            <textarea class="form-control" rows="4"></textarea>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6">
            <label class="form-label"
              >Have you used another email marketing service in the past?
              <br />
              <small
                >If you need help migrating your account to sendhive, we can ﬁnd
                you a certiﬁed specialist that meets your speciﬁc needs.</small
              ></label
            >
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <label class="form-label"
              >Have you ever used other website builders before?
            </label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-12">
            <label
              ><strong> Mailer anti-spam policy</strong><br /><small
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.</small
              ></label
            >
            <textarea class="form-control" rows="4">
Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
 and scrambled it to make a type specimen book. It has survived not only ﬁve centuries, but also the leap into electronic 
 typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
 
 Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
 Lorem Ipsum.</textarea
            >
          </div>
        </div>

        <div class="custom-control custom-checkbox checkbox-lg mb-5">
          <input type="checkbox" class="custom-control-input" checked="" />
          <label class="custom-control-label"
            >I have read sendhive anti-spam policy I agree</label
          >
        </div>

        <button type="button" class="mt-3 btn btn-primary">Save</button>
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
  name: "Profile",
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
