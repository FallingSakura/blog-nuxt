<script setup>
const props = defineProps({
  // props: {
    title: {
      type: String,
      default: "Hello World",
    },
    date: {
      type: String,
      default: "2024/08/03 15:00:00",
    },
    description: {
      type: String,
      default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quod. Eligendi eum deleniti natus iure culpa."
    },
    tags: {
      type: Array,
      default: ['Test_tag', 'tag', 'another'],
    }
  //   type: Object,
  // }
})
console.log(props);
</script>
<template>
  <div class="article-card">
    <h1 class="title">
      {{ props.title }}
    </h1>
    <div class="subtitles">
      <p class="date">{{ props.date }}</p>
      <div class="box">
        <!-- <tag-button class="button" title="Test_test"></tag-button>
        <tag-button class="button"></tag-button>
        <tag-button class="button"></tag-button> -->
        <tag-button v-for="tag in props.tags" class="button" :title="tag"></tag-button>
      </div>
      <p class="description">{{ props.description }}</p>
    </div>
    <img class="banner">
  </div>
</template>

<style scoped>
.article-card {
  position: relative;
  width: 100%;
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
  font-size: 1.6em;
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
  width: 52%;
  /* background-color: rgb(255, 119, 119); */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;  
}
.subtitles .box .button {
  margin: 10px 10px 0 0;
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