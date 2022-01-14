<template>
  <div class="wrapper">
    <div class="nav">
      <MobileNavBar v-if="mobileView" />
      <NavBar v-if="!mobileView" />
    </div>
    <div class="topicsLine">
      <ul>
        <li>Coronavirus</li>
        <li>Pandemia</li>
        <li>Artificial intelligence</li>
        <li>Biotechnology</li>
        <li>Climate change</li>
        <li>Computing</li>
        <li>Human beings</li>
        <li>Silicon valley</li>
      </ul>
    </div>
    <Scroll text="categories"></Scroll>
    <FullArticle  v-show="toggle"/>
    
    <div class="catArticles">
      <div class="categoryColumn">
        <div class="category">Coronavirus</div>
        <div class="category">Pandemia</div>
        <div class="category">Artificial intelligence</div>
        <div class="category">Biotechnology</div>
        <div class="category">Climate change</div>
        <div class="category">Computing</div>
        <div class="category">Human beings</div>
        <div class="category">Silicon valley</div>
      </div>
      <div class="articleContainer">
        <div class="articleRow">
          
          <div class="item" id="1" @click="toggle=!toggle">
            <NewsItem id="1"  />
          </div>
          <div class="item" id="2" @click="toggle=!toggle">
            <NewsItem id="2"  />
          </div>
          <div class="item" id="3" @click="toggle=!toggle">
            <NewsItem id="3"  />
          </div>
          <div class="item" id="4" @click="toggle=!toggle" >
            <NewsItem id="4" />
          </div>
        
        </div>
        <div class="articleRow">
          <div class="item" id="5" @click="toggle=!toggle">
            <NewsItem id="5"  />
          </div>
          <div class="item" id="6" @click="toggle=!toggle">
            <NewsItem id="6"  />
          </div>
          <div class="item" id="7" @click="toggle=!toggle">
            <NewsItem id="7"  />
          </div>
          <div class="item" id="8" @click="toggle=!toggle">
            <NewsItem id="8"  />
          </div>
        </div>
        <div class="articleRow">
          <NewsItem id="9" />
          <NewsItem id="10" />
          <NewsItem id="11" />
          <NewsItem id="12" />
        </div>
        <div class="articleRow">
          <NewsItem id="13" />
          <NewsItem id="14" />
          <NewsItem id="15" />
          <NewsItem id="16" />
        </div>
        <div class="articleRow">
          <NewsItem id="17" />
          <NewsItem id="18" />
          <NewsItem id="19" />
          <NewsItem id="20" />
        </div>
        <div class="articleRow">
          <NewsItem id="21" />
          <NewsItem id="22" />
          <NewsItem id="23" />
          <NewsItem id="24" />
        </div>
        <div class="articleRow">
          <NewsItem id="25" />
          <NewsItem id="26" />
          <NewsItem id="27" />
          <NewsItem id="28" />
        </div>
        <div class="articleRow">
          <NewsItem id="29" />
          <NewsItem id="30" />
          <NewsItem id="31" />
          <NewsItem id="32" />
        </div>
      </div>
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
import NewsItem from "../components/newsItem.vue";
import WhatsUp from "../components/whatsUp.vue";
import Footer from "../components/footer.vue";
import FullArticle from "../components/fullArticle.vue";

export default {
  data: () => {
    return {
      mobileView: true,
      toggle:false,
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
    NewsItem,
    WhatsUp,
    Footer,
    FullArticle
    
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  computed: {
    news() {
      return this.$store.getters.news;
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  .topicsLine {
    position: relative;
    width: 100%;
    margin-top: 0;
    padding-top: 0;
    background-color: rgb(255, 255, 255);
    font-family: "Source Sans Pro", sans-serif;

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      list-style-type: none;

      li {
        cursor: pointer;
        flex: auto;
        text-align: center;
        padding: 0.5rem;
        border: 1px solid black;
        color: rgb(116, 116, 116);
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
      }
      li:hover {
        background-color: rgb(209, 209, 209);
        color: rgb(66, 66, 66);
      }
    }
  }

  .catArticles {
    height: 100%;
    padding: 0;
    margin: 0;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: row;
    .categoryColumn {
      margin: 0;
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgb(130, 39, 214);
      // background-color: rgb(114, 114, 114);
      .category {
        box-sizing: border-box;
        padding: 2rem;
        border: 1px solid black;
        margin: 0;
        flex: auto;
        align-items: center;
        width: auto;
        text-transform: uppercase;
        color: rgb(255, 255, 255);
        font-size: 20px;
        height: 200px;
      }
      .category:hover {
        background-color: rgb(150, 31, 10);
      }
    }
    .articleContainer {
      display: flex;
      flex-direction: column;
      width: 80%;
      .articleRow {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        height: 200px;
        
      }
    }
  }
}

.devider {
  height: 4em;
  width: 100%;
}
</style>