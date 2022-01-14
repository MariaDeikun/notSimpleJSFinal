<template>
  <div>
    <div class="scrollLine">
      <marquee>{{ result(text) }} </marquee>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"],
  name: "scroll",
  methods: {
    result: function (text) {
      let line = " ";
      for (let i = 0; i < 10; i++) {
        line = line + text + " ";
      }
      return line;
    },
  },
};
</script>

<style scoped lang="scss">
.scrollLine marquee {
  margin: 0;
  padding: 0.5em;
  background-color: black;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  font-size: 30px;
}
</style>