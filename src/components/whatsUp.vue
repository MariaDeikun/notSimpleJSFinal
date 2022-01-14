<template>
  <div>
    <div class="WhatsUp">
      <h1>your daily doze of what's up in emergine technology</h1>
      <div class="input"><input placeholder="Email" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "whatsUp",
};
</script>

<style scoped lang="scss">
.WhatsUp {
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 3em;
  flex-direction: column;

  h1 {
    text-align: center;
    font-weight: 300;
    font-size: 25px;
    text-transform: uppercase;
    color: white;
  }
  .input {
    text-align: center;
    input {
      width: 50%;
      padding: 0.5em;
      font-weight: 300;
      font-size: 16px;
      background: none;
      border: 1px solid white;
      border-radius: 5px;
      color: rgb(165, 165, 165);
    }
  }
}
</style>