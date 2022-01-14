<template>
  <div class="wrapper">
    <div class="picture">
      <img v-bind:src="magazineItem.picURL" />
    </div>
    <div class="description">
      <button>{{ magazineItem.date }}</button>
      <hr />
      <h2>{{ magazineItem.text }}</h2>
      <hr />
      <p>{{ magazineItem.overview }}</p>
      <ul class="hidden" v-show="toggle">
        <li>
          {{ magazineItem.issue }}
        </li>
      </ul>
      <div class="buttons">
        <div class="readIssue" @click="toggle = !toggle">read issue</div>
        <div class="download" @click="redirect(magazineItem.link)">
          download
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      toggle: false,
    };
  },
  props: ["id"],
  computed: {
    magazineItem() {
      return this.$store.getters.magazineById(this.id);
    },
  },
  methods: {
    redirect: function (link) {
      window.location.href = link;
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
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
</style>