<template>
  <div class="wrapper">
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600;400;300&display=swap"
      rel="stylesheet"
    />
    <div class="containerLeft">
      <h1>MIT Technology Review</h1>
      <p>
        Our mission is to bring about better-informed and more conscious
        decisions about technology through authoritative, influential, and
        trustworthy journalism.
      </p>
    </div>
    <div class="containerRight">
      <div class="cont1">
        <div>
          <a>account</a>
        </div>
        <div>
          <a @click="$router.push('/Magazines')">Magazines</a>
        </div>
      </div>
      <div class="cont">
        <div>
          <a @click="$router.push('/News')">News</a>
        </div>
        <div>
          <a @click="$router.push('/Events')">Events</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  border: 1px solid black;
  .containerLeft {
    width: 50%;
    padding: 2em;
    border-right: 1px solid black;

    h1 {
      text-align: start;
      font-weight: 600;
      font-size: 24px;
      text-transform: uppercase;
    }
    p {
      text-align: start;
      font-weight: 400;
      color: black;
      font-size: 18px;
    }
  }
  .containerRight {
    width: 50%;
    display: flex;
    flex-direction: column;
    .cont1 {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid black;
      justify-content: space-around;
      width: 100%;
      div {
        padding: 2em;

        a {
          text-decoration: none;
          color: black;
          font-size: 18px;
          font-weight: 400;
          text-transform: uppercase;
          cursor: pointer;
        }
      }
    }
    .cont {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      div {
        padding: 2em;

        a {
          text-decoration: none;
          color: black;
          font-size: 18px;
          font-weight: 400;
          text-transform: uppercase;
          cursor: pointer;
        }
      }
    }
  }
}
</style>