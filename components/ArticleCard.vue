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
      default: () => ['Test_tag', 'tag', 'another'],
    },
    src: {
      type: String,
      default: null,
    }
  //   type: Object,
  // }
})
</script>
<template>
  <div class="article-card">
    <h1>
      
      {{ props.title }}
    </h1>
    <div class="subtitles">
      <p class="date">{{ props.date }}</p>
      <div class="box">
        <tag-button v-for="tag in props.tags" :key="tag._id" class="button" :title="tag"/>
      </div>
      <p class="description">{{ props.description }}</p>
    </div>
    <div class="banner" :style="`background-image: url(${props.src})`"></div>
  </div>
</template>

<style scoped>
.article-card {
  position: relative;
  width: 100%;
  min-height: 220px;  
  background: #fff;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  margin-top: 20px;
  transition: all 0.2s ease;
  padding: 20px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.article-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, #ff6b6b, #f94d6a, #f9d423, #ff4b1f);
  z-index: 0;
  transition: opacity 0.3s;
  border-radius: 50%;
  opacity: 0;
}
.article-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.article-card:hover::before {
  opacity: 0.1;
}
.article-card h1 {
  font-size: 1.6em;
  color: #333;
}
.subtitles {
  width: 100%;
  height: fit-content;
}
.subtitles .date {
  color: #aaa;
}

.subtitles .box {
  width: 50%;
  /* background-color: rgb(255, 119, 119); */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;  
}
.subtitles .box .button {
  margin: 8px 8px 0 0;
}
.banner {
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  top: 0;
  background-position: cover;
  background-size: cover;
  background-repeat: no-repeat;
}
.subtitles .description {
  color: #666;
  width: 50%;
  font-size: 0.9em;
  margin-right:10px;
  margin-top: 10px;
}
@media (max-width: 700px) {
  .banner {
    display: none;
  }
  .subtitles .box {
    width: 100%;
  }
}
</style>