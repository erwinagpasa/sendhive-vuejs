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

      <section>
        <div class="container">
          <div class="accordion" id="accordionExample">
            <div class="steps">
              <progress id="progress" value="0" max="100"></progress>
              <div class="step-item">
                <button
                  class="step-button text-center"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1
                </button>
                <div class="step-title">
                  Completed
                </div>
              </div>
              <div class="step-item">
                <button class="step-button text-center collapsed" type="button">
                  2
                </button>
                <div class="step-title">
                  Complete profile
                </div>
              </div>
              <div class="step-item">
                <button
                  class="step-button text-center collapsed"
                  type="button"
                ></button>
                <div class="step-title">
                  Request approval
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /><br />
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
.steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
}

.step-title {
  border: 1px solid #ff0000;
  padding: 10px 30px 10px 30px;
  font-size: 12px;
}

.step-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #ff0000;
  transition: 0.4s;
}

.step-button[aria-expanded="true"] {
  width: 50px;
  height: 50px;
  background-color: #ddd;
  color: #fff;
}

.done {
  background-color: green;
  color: #fff;
}

.step-item {
  z-index: 10;
  text-align: center;
}

#progress {
  -webkit-appearance: none;
  position: absolute;
  width: 85%;
  z-index: 5;
  height: 10px;
  margin-left: 55px;
  margin-bottom: 20px;
}
</style>
