<template>
  <div class="wrapper">
    <div class="logIn">
      <h2>Member login</h2>
      <div class="button" v-on:click="$router.push('/signIn')">sign in</div>
      <div class="button" v-on:click="$router.push('/signUp')">sign up</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",

  data() {
    return {
      signIn: false,
      signUp: false,
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  .logIn {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5rem;
    border: 2px solid black;
    background: #fff;
    width: 20%;
    margin-left: auto;
    margin-right: auto;

    h2 {
      margin: 0;
      background-color: black;
      color: white;
      width: 100%;
      text-align: center;
      font-weight: 300;
      font-size: 30px;
      text-transform: uppercase;
      flex: auto;

      margin-bottom: 1.5rem;
    }

    .button {
      flex: auto;
      border: none;
      background: none;
      text-align: center;
      border: 1px solid black;
      padding: 1rem 4rem;
      margin-bottom: 1.5rem;

      font-size: 16px;
      text-transform: uppercase;
      color: #000;
      &:hover {
        background-color: rgb(0, 117, 20);
        color: white;
      }
    }
  }
}
</style>
