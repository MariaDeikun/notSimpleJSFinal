<template>
  <div id="app">
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

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  font-family: "Source Sans Pro", sans-serif;
  color: #000000;
  margin-top: 0px;
}
</style>
