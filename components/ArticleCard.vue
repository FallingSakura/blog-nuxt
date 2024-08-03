<script setup lang="ts">
class Card {

}
const props = defineProps({
  title: {
    type: String,
    default: "Hello World",
  },
  date: {
    type: String,
    default: "2024/08/03 15:00:00",
  }
})
</script>
<template>
  <div class="article-card">
    <h1 class="title">
      {{ props.title }}
    </h1>
    <div class="subtitles">
      <p class="date">{{ props.date }}</p>
      <div class="box">
        <tag-button class="button" title="Test_test"></tag-button>
        <tag-button class="button"></tag-button>
        <tag-button class="button"></tag-button>
      </div>
      <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quod. Eligendi eum deleniti natus iure culpa.</p>
    </div>
    <img class="banner">
  </div>
</template>

<style scoped>
.article-card {
  position: relative;
  width: 800px;
  height: 300px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid rgba(128, 128, 128, 0.469);
  position: relative;
  margin-top: 20px;
  transition: all 0.2s ease;
  padding: 20px;
  overflow: hidden;
}
.article-card:hover {
  box-shadow: black 0 0 2px;
}
.article-card .title {
  font-size: 2em;
  color:rgba(0, 0, 0, 0.871);
}
.subtitles {
  /* background: grey; */
  width: 100%;
  height: fit-content;
  /* padding: 5px; */
}
.subtitles .date {
  color: rgb(142, 115, 115);
}

.subtitles .box {
  width: 100%;
  height: 50px;
  /* background-color: rgb(255, 119, 119); */
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.subtitles .box .button {
  margin-right: 10px;
}
.banner {
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  top: 0;
}
.subtitles .description {
  width: 50%;
  font-size: 0.9em;
  padding-right:10px;
  padding-top: 10px;
}
</style>