<template>
  <div class="wrapper">
    <div class="nav">
      <MobileNavBar v-if="mobileView" />
      <NavBar v-if="!mobileView" />
    </div>
    <Scroll text="Magazines"></Scroll>
    <div class="month">september</div>
    <Magazine id="1" />

    <div class="month">August</div>
    <Magazine id="2" />

    <WhatsUp />

    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/navBar.vue";
import MobileNavBar from "../components/mobileNavBar.vue";
import Scroll from "../components/scroll.vue";
import Magazine from "../components/magazine.vue";
import WhatsUp from "../components/whatsUp.vue";
import Footer from "../components/footer.vue";
export default {
  data: () => {
    return {
      mobileView: true,
      toggle: false,
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
    Scroll,
    WhatsUp,
    Magazine,
    Footer,
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  computed: {
    magazines() {
      return this.$store.getters.magazines;
    },
  },
};
</script>


<style scoped lang="scss">
.month {
  margin: 0;
  padding: 0.5em;
  text-transform: uppercase;
  color: black;
  font-size: 25px;
  text-align: center;
}
.magazine {
  display: flex;
  width: 100%;
  border: 1px solid black;
  flex-direction: row;
  .picture {
    width: 40%;
    img {
      width: 100%;
      flex: auto;
      height: auto;
    }
  }
  .description {
    width: 50%;
    padding: 2rem;
    button {
      flex: auto;
      background: none;
      border: 1px solid black;
      padding: 0.5rem;
      font-size: 14px;
      text-transform: uppercase;
      color: #000;
      margin-bottom: 4rem;
      &:hover {
        background-color: black;
        color: white;
      }
    }
    hr {
      width: 100%;
    }
    h2 {
      font-size: 30px;
      text-transform: uppercase;
      color: #000;
      font-weight: 300;
    }
    p {
      font-size: 20px;
      text-transform: uppercase;
      color: rgb(88, 88, 88);
      font-weight: 300;
    }
    ul {
      list-style: none;
      width: 100%;
      padding-left: 0px;
      text-align: center;
      margin-top: 0;
      li {
        font-size: 14px;
        text-transform: uppercase;
        color: rgb(88, 88, 88);
        padding: 0.5rem;
      }
    }
    .buttons {
      display: flex;
      font-display: row;
      text-align: center;
      justify-content: space-around;
      width: 100%;
      .readIssue {
        width: 40%;
        padding: 2rem;
        flex: auto;
        background: none;
        border: 1px solid black;
        font-size: 14px;
        text-transform: uppercase;
        color: #000;
        margin-top: 4rem;
        &:hover {
          background-color: black;
          color: white;
        }
      }
      .download {
        width: 40%;
        flex: auto;
        padding: 2rem;
        background: black;

        font-size: 14px;
        text-transform: uppercase;
        color: #fff;
        margin-top: 4rem;
        &:hover {
          background: none;
          border: 1px solid black;
          color: black;
        }
      }
    }
  }
}
.containerWhatsUp {
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 3em;
  flex-direction: column;

  h1 {
    text-align: center;
    font-weight: 300;
    font-size: 25px;
    text-transform: uppercase;
    color: white;
  }
  .input {
    text-align: center;
    input {
      width: 50%;
      padding: 0.5em;
      font-weight: 300;
      font-size: 16px;
      background: none;
      border: 1px solid white;
      border-radius: 5px;
      color: rgb(165, 165, 165);
    }
  }
}
</style>