<template>
  <div class="wrapper">
    <div class="article">
      <div class="title">
        Hard work will change the world
        <!-- {{ articleItem.title }} -->
      </div>
      <hr />
      <p>
        if only you are not as lazy as sh*t and don't know anything, this way
        your initiative can only ruin everything
        <!-- hallo {{ articleItem.full }} -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return;
  },
  // props: ["id"],
  //   computed: {
  //     articleItem() {
  //       return this.$store.getters.fullById(this.id);
  //     },
  //   },
};
</script>
<style scoped lang="scss">
.wrapper {
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 0px 46px 2px #000000;
  padding: 2em;
  margin: 0 15%;
  width: 70%;
  height: auto;
  font-family: "Source Sans Pro", sans-serif;

  .title {
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
  }
  p {
    font-size: 20px;
  }
}
</style>