<template>
  <div class="wrapper">
    <div class="nav">
      <MobileNavBar v-if="mobileView" />
      <NavBar v-if="!mobileView" />
    </div>
    <Scroll text="events review"></Scroll>

    <div class="eventContainer">
      <Event id="1" />
      <Event id="2" />
      <Event id="3" />
      <Event id="4" />
      <div class="hiddenWrapper" v-if="seen">
        <Event id="5" />
        <Event id="6" />
        <Event id="7" />
      </div>
    </div>
    <div class="showButton" v-on:click="seen = !seen">
      <button @click="showMore" v-if="!readMore">Show more</button>
      <button @click="showLess" v-if="readMore">Show less</button>
    </div>

    <div class="devider"></div>
    <WhatsUp />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/navBar.vue";
import MobileNavBar from "../components/mobileNavBar.vue";
import Scroll from "../components/scroll.vue";
import Event from "../components/event.vue";

import WhatsUp from "../components/whatsUp.vue";
import Footer from "../components/footer.vue";

export default {
  el: "#wrapper",

  data: () => {
    return {
      readMore: false,
      mobileView: false,
      seen: false,
    };
  },
  methods: {
    showMore() {
      this.readMore = true;
    },
    showLess() {
      this.readMore = false;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 600;
    },
  },
  components: {
    NavBar,
    MobileNavBar,
    Scroll,
    Event,
    WhatsUp,
    Footer,
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  computed: {
    events() {
      return this.$store.getters.events;
    },
  },
};
</script>

<style scoped lang="scss">
.eventContainer {
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
}
.showButton {
  text-align: center;
  padding-top: 1rem;
  button {
    flex: auto;
    border: none;
    background: none;
    border: 1px solid black;
    padding: 4rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 16px;
    text-transform: uppercase;
    color: #000;
    &:hover {
      background-color: black;
      color: white;
    }
  }
  border: 0;
}

.devider {
  height: 4em;
  width: 100%;
}
</style>