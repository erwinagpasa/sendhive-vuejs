<template>
  <div>
    <Navbar />
    <Header />
    <TrustedBrand />
    <Empower />
    <Invest />
    <Clickthrough />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import TrustedBrand from "@/components/TrustedBrand.vue";
import Empower from "@/components/Empower.vue";
import Invest from "@/components/Invest.vue";
import Clickthrough from "@/components/Clickthrough.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Header,
    TrustedBrand,
    Empower,
    Invest,
    Clickthrough,
    Footer,
  },
};
</script>
