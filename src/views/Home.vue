<template>
  <div>
    <Header />
    <TrustedBrand />
    <Empower />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TrustedBrand from "@/components/TrustedBrand.vue";
import Empower from "@/components/Empower.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    TrustedBrand,
    Empower,
    Footer,
  },
};
</script>


