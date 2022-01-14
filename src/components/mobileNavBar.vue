<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600;400&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
    <div class="navbar">
      <div class="icon" @click="toggle = !toggle">
        <i class="fas fa-bars"></i>
      </div>
      <div class="home"><a href="#">MIT Technology Review</a></div>
      <button><a href="#">log in</a></button>
    </div>
    <div class="navigation" v-show="toggle">
      <ul>
        <li><a href="#">magazine</a></li>
        <li><a href="#">news</a></li>
        <li><a href="#">events</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNavBar",
  data: () => {
    return {
      toggle: false,
    };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin: 0;
  padding: 0;

  .icon {
    color: black;
    font-size: 28px;
    flex: auto;
    text-align: center;
    padding: 1rem;
    border: 1px solid black;
  }
  .home {
    cursor: pointer;
    flex: auto;
    text-align: center;
    padding: 1rem;
    border: 1px solid black;
    a {
      color: black;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 28px;
      font-weight: 600;
      text-transform: none;
      text-decoration: none;
    }
  }
  button {
    outline: none;
    cursor: pointer;
    flex: auto;
    text-align: center;
    background-color: black;
    border: none;
    a {
      font-family: "Source Sans Pro", sans-serif;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
.navigation {
  transition: 1s;
  ul {
    list-style: none;
    width: 100%;
    padding-left: 0px;
    border: 1px solid black;
    margin-top: 0;

    li {
      a {
        font-family: "Source Sans Pro", sans-serif;
        color: black;
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
        text-transform: uppercase;
        padding: 20px;
      }
      padding-top: 20px;
      padding-bottom: 20px;
      cursor: pointer;
      &:hover {
        background-color: black;
        a {
          font-family: "Source Sans Pro", sans-serif;
          color: white;
          font-size: 16px;
          font-weight: 400;
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>