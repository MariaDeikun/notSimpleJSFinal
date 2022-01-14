<template>
  <div id="app">
    <div class="nav">
      <MobileNavBar v-if="mobileView" />
      <NavBar v-if="!mobileView" />
    </div>
    <div class="content">
      <MainNews />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/navBar.vue";
import MobileNavBar from "../components/mobileNavBar.vue";
import MainNews from "../components/mainNews.vue";
import Footer from "../components/footer.vue";
export default {
  data: () => {
    return {
      mobileView: true,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 600;
    },
  },
  components: {
    NavBar,
    MobileNavBar,
    MainNews,
    Footer,
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style>
</style>