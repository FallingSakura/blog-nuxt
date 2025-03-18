<script setup>
const title = 'This is My Blog'
const obj = {
  title,
  date: '2024/08/04 08:00',
  // description: "HaHaHAHAHAHAHA",
  tags: ['1', '2', '3', 'haha', 'yeah'],
  src: 'https://cdn.jsdelivr.net/gh/FallingSakura/Source@main/img/202408061546383.webp'
}
const objs = {
  0: obj,
  1: {},
  2: {},
  3: {},
  4: {}
}
</script>
<template>
  <div class="body">
    <nav-bar />
    <div class="content">
      <side-bar class="sidebar" />
      <div class="articles">
        <article-card v-for="ob in objs" v-bind="ob" :key="ob._id" />
      </div>
      <div class="catalogs"></div>
    </div>
    <nav-button class="test" title="NotFound" url="./NotFound" :ico="true">
      <font-awesome icon="question" />
    </nav-button>
  </div>
</template>

<style scoped>
.body {
  width: 100%;
  height: 100%;
  background: rgba(242, 242, 242, 1);
  min-height: 100vh;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
}
.articles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: fit-content;
  width: 40%;
}
.sidebar {
  position: fixed;
  left: 5%;
  top: 18%;
}
.catalogs {
  width: 20%;
  min-width: 400px;
  height: 90vh;
  position: fixed;
  background-color: rgba(255, 192, 203, 0.35);
  bottom: 0;
  right: 2vh;
}
.test {
  position: fixed;
  bottom: 2vh;
  left: 2vh;
}
@media (max-width: 1600px) {
  .catalogs {
    display: none;
  }
  .sidebar {
    position: absolute;
    top: 3%;
  }
  .test {
    display: none;
  }
}
@media (min-width: 1100px) and (max-width: 1600px) {
  .content {
    justify-content: flex-end;
    padding-right: 7%;
  }
  .articles {
    width: 55%;
  }
}
@media (max-width: 1024px) {
  .content {
    padding-right: unset;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .articles {
    width: 80%;
  }
  .sidebar {
    position: relative;
    top: unset;
    left: unset;
  }
}
@media (max-width: 700px) {
  .articles {
    width: 90%;
  }
}
</style>
