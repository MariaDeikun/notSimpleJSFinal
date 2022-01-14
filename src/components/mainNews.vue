<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600;400&display=swap"
      rel="stylesheet"
    />
    <Scroll text="latest news"></Scroll>
    <div class="containerLatestNews">
      <div class="containerMain">
        <div class="texts">
          <h1>The miracle molecule that could treat brain injuries and boo</h1>
          <hr />
          <p>
            Discovered more than a decade ago, a remarkable compound shows
            promise in treating everything from Alzheimer’s to brain
            injuries—and it just might improve your cognitive abilities.
          </p>
        </div>

        <img
          src="https://wp.technologyreview.com/wp-content/uploads/2021/08/SO21_TR_so21_memories-1_01.jpg?fit=2048,1364"
        />
      </div>
      <div class="containerSide">
        <div>
          <h3>Can you spot the fake receptor? The coronavirus can’t either.</h3>
          <hr />
          <p>
            As researchers search for new ways to treat covid-19, some
            scientists are making decoy receptors to lure the virus away from
            our cells.
          </p>
        </div>
        <hr class="devider" />
        <div>
          <h3>
            People are hiring out their faces to become deepfake-style marketing
            clones
          </h3>
          <hr />
          <p>
            AI-powered characters based on real people can star in thousands of
            videos and say anything, in any language.
          </p>
        </div>
        <hr class="devider" />
        <div>
          <h3>
            Hackers are trying to topple Belarus’s dictator, with help from the
            inside
          </h3>
          <hr />
          <p>
            Opposition from inside the regime of Alexander Lukashenko is helping
            hackers run what may be the most comprehensive cyberattack on a
            nation ever.
          </p>
        </div>
      </div>
    </div>
    <div class="devider"></div>
    <Scroll text="popular review"></Scroll>
    <div class="containerPopularReview">
      <div class="main">
        <div>
          <button>Topic</button> <button>Topic</button>
          <h2>
            People are hiring out their faces to become deepfake-style marketing
            clones
          </h2>
        </div>
        <hr />
        <div>
          <button>Topic</button> <button>Topic</button>
          <h2>
            Hackers are trying to topple Belarus’s dictator, with help from the
            inside
          </h2>
        </div>
        <hr />
        <div>
          <button>Topic</button> <button>Topic</button>
          <h2>
            Why capturing carbon is an essential part of Biden’s climate plans
          </h2>
        </div>
        <hr />
        <div>
          <button>Topic</button> <button>Topic</button>
          <h2>
            US government agencies plan to increase their use of facial
            recognition technology
          </h2>
        </div>
      </div>

      <div class="side">
        <img
          src="https://wp.technologyreview.com/wp-content/uploads/2021/07/Characters-2-web.png?resize=1272,714"
        />
      </div>
    </div>
    <div class="devider"></div>
    <Scroll text="our team"></Scroll>
    <div class="containerTeam">
      <div class="teamMember">
        <img
          src="https://wp.technologyreview.com/wp-content/uploads/2021/04/roberts_rgb.png?fit=1400,1400"
        />
        <h1>Siobhan Roberts</h1>
        <hr />
        <p>Mathematicians are deploying algorithms to stop gerrymandering</p>
      </div>
      <div class="teamMember">
        <img
          src="https://wp.technologyreview.com/wp-content/uploads/2020/12/Neel-transparent.png?fit=1400,1400"
        />
        <h1>Neel V. Patel</h1>
        <hr />
        <p>I taught myself to lucid dream. You can too.</p>
      </div>
      <div class="teamMember">
        <img
          src="https://wp.technologyreview.com/wp-content/uploads/2020/03/will_heaven-2.png?fit=1400,1400"
        />
        <h1>Will Heaven</h1>
        <hr />
        <p>
          People are hiring out their faces to become deepfake-style marketing
          clones
        </p>
      </div>
      <div class="teamMember">
        <img
          src="https://wp.technologyreview.com/wp-content/uploads/2011/03/bobbie_johnson_0.png?fit=1400,1400"
        />
        <h1>Bobbie Johnson</h1>
        <hr />
        <p>Your guide to what's happening with vaccine passports in the US</p>
      </div>
    </div>
    <div class="devider"></div>
    <WhatsUp />
  </div>
</template>

<script>
import Scroll from "../components/scroll.vue";
import WhatsUp from "../components/whatsUp.vue";
export default {
  name: "mainLNews",
  components: {
    Scroll,
    WhatsUp,
  },
};
</script>

<style scoped lang="scss">
.containerLatestNews {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  border: 1px solid black;

  .containerMain {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    img {
      width: 100%;
      height: auto;
      align-items: flex-start;
    }
    .texts {
      padding: 1em;

      h1 {
        text-align: start;
        font-weight: 400;
        font-size: 24px;
        text-transform: uppercase;
      }
      p {
        text-align: start;
        font-weight: 400;
        color: grey;
        font-size: 14px;
      }
    }
  }
  .containerSide {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    border-left: 1px solid black;

    div {
      padding: 2em;
      // margin-top: 0;
      // margin-bottom: 0;
      // border: 1px solid black;
      h3 {
        text-align: start;
        font-weight: 300;
        font-size: 16px;
        text-transform: uppercase;
        color: rgb(58, 58, 58);
      }
      p {
        text-align: start;
        font-weight: 300;
        color: grey;
        font-size: 14px;
        margin-bottom: 0;
      }
    }
    .devider {
      width: 100%;
      background-color: black;
      height: 1px;
      border: 0px white;
    }
  }
}
.devider {
  height: 4em;
  width: 100%;
}

.containerPopularReview {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  overflow: hidden;

  .main {
    width: 60%;
    border-right: 1px solid black;

    div {
      padding: 2em;

      h2 {
        text-align: start;
        font-weight: 300;
        font-size: 20px;
        text-transform: uppercase;
        color: rgb(58, 58, 58);
      }
    }
    hr {
      width: 100%;
      background-color: black;
      height: 1px;
      border: 0px white;
    }
  }

  .side {
    width: 30%;

    img {
      height: 100%;
      width: auto;
    }
  }
}
.containerTeam {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  .teamMember {
    width: 25%;
    padding: 2em;
    border-left: 1px solid black;
    img {
      width: 100%;
      height: auto;
    }
    hr {
      width: 100%;
      background-color: black;
      height: 1px;
      border: 0px white;
    }
    h1 {
      text-align: center;
      font-weight: 300;
      font-size: 25px;
      text-transform: uppercase;
      color: black;
    }
    p {
      text-align: start;
      font-weight: 300;
      font-size: 16px;
      // text-transform: uppercase;
      color: rgb(58, 58, 58);
    }
  }
}
</style>