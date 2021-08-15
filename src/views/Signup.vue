<template>
  <div>
    <Navbar />
    <h1 class="page-headline text-center">Get started with a free account</h1>
    <p class="text-center">Sign up in seconds. No credit card required.</p>
    <div class="col-md-10 mx-auto">
      <div class="row">
        <div class="col-md-6 mt-5">
          <form class="mr-5">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Check me out</label
              >
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-md-6 mt-5">
          <p><strong>Our Forever Free plan includes:</strong></p>
          <ul class="check">
            <li>
              Free 14-day access to our premium features including live chat,
              template library, auto resend and promotion pop-ups
            </li>
            <li>
              Access to main features like automation, landing pages, website
              builder and more
            </li>
            <li>
              Up to 1,000 subscribers
            </li>
            <li>Send up to 12,000 emails per month</li>
            <li>
              24/7 customer support via email
            </li>
            <li>
              Upgrade anytime
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Signup",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.form-div {
  background: #fff;
  padding-bottom: 20px;
}

.form-signup {
  width: 100%;
  padding: 25px;
  margin: auto;
}

.form-signup input.first {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  outline: 0;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

.form-signup input.custom {
  margin-bottom: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  outline: 0;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

.form-signup input.last {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-outline-primary {
  padding: 8px 30px 8px 30px !important;
  display: inline-block;
  color: #fff !important;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #da5127 !important;
  background: #da5127;
}

.btn-outline-primary:hover {
  background: #363636 !important;
  border: 1px solid #363636 !important;
}
</style>
