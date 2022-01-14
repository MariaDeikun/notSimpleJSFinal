<template>
  <div>
    <div class="navbar">
      <ul>
        <li @click="$router.push('/Magazines')">magazines</li>
        <li @click="$router.push('/News')">news</li>
        <li @click="$router.push('/Events')">events</li>
        <li @click="$router.push('/')">
          <div class="home">MIT Technology Review</div>
        </li>
        <button id="logIn" @click="toggle = !toggle">log in</button>
      </ul>
    </div>

    <Login v-show="toggle" />
  </div>
</template>
<script>
import Login from "./login.vue";
export default {
  name: "NavBar",
  components: {
    Login,
  },
  data: () => {
    return {
      toggle: false,
    };
  },
};
</script>
<style scoped lang="scss">
.navbar {
  position: relative;
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
      padding: 1rem;
      border: 1px solid black;
      color: black;
      font-size: 18px;
      font-weight: 400;
      text-transform: uppercase;
      .home {
        font-size: 20px;
        font-weight: 600;
        text-transform: none;
      }
    }
    button {
      outline: none;
      cursor: pointer;
      flex: auto;
      text-align: center;

      background-color: black;
      border: none;

      font-family: "Source Sans Pro", sans-serif;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 400;
    }
    li:hover {
      background-color: black;

      color: white;
    }
    button:hover {
      background-color: white;
      border: 1px solid black;

      color: black;
    }
  }
}
</style>