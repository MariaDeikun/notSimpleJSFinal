<template>
  <div>
    <div class="article">
      <div class="title" >
        {{ newsItem.title }}
        
      </div>
      <hr />
      <p>
        {{ newsItem.overview }}
      </p>
      
    </div>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
     
    };
  },
  props: ["id"],
  computed: {
    newsItem() {
      return this.$store.getters.newsById(this.id);
    },
  },
  
 
};
</script>

<style scoped lang="scss">
.article {
  box-sizing: border-box;
  flex: auto;
  height: 200px;
  border: 1px solid black;
  padding: 1rem;

  .title {
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    color: #000;
  }
  .title:hover {
    color: #fff;
  }
  p {
    font-size: 14px;
    color: grey;
  }
  hr {
    width: 100%;
    background-color: black;
    height: 1px;
    border: 0px white;
  }
}
.article:hover {
  background-color: rgb(0, 117, 20);
  h2 {
    color: #fff;
  }
  p {
    color: #fff;
  }
  button {
    color: #fff;
  }
}
</style>