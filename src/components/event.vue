<template>
  <div class="event">
    <div class="month">
      {{ eventItem.month }}
    </div>
    <div class="evName">
      {{ eventItem.title }}
    </div>
    <div class="learnMore" @click="redirect(eventItem.link)">
      <h2>learn more ></h2>
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
    eventItem() {
      return this.$store.getters.eventById(this.id);
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
.event {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  justify-content: flex-start;
  font-size: 30px;
  text-transform: uppercase;
  .month {
    box-sizing: border-box;
    width: 20%;
    padding: 2rem;
    border: 1px solid black;
    margin: 0;
    align-items: center;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    font-size: 20px;
    height: 200px;
    background-color: rgb(0, 117, 20);
    &:hover {
      background-color: rgb(150, 31, 10);
    }
  }

  .evName {
    width: 50%;
    padding: 2rem;
    flex: auto;
    height: 100%;
  }
  .learnMore {
    box-sizing: border-box;
    width: 30%;
    font-size: 25px;
    background-color: black;
    color: white;
    padding-left: 1rem;

    h2 {
      width: 50%;
      margin: 0;
      color: white;
      font-size: 25px;
      text-transform: uppercase;
      font-weight: 300;
      padding-top: 2rem;
    }
  }
}
</style>