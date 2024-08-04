<script setup>
const title = "This is My Blog";
const obj = {
  title, 
  date: "2024/08/04 08:00",
  description: "HaHa",
  tags: ['1', '2', '3', 'haha', 'yeah'],
};
const objs = {
  0: obj,
  1: {},
  2: {},
  3: {},
  4: {},
};
</script>
<template>
  <div class="body">
    <nav-bar></nav-bar>
    <div class="content">
      <side-bar class="sidebar"></side-bar>
      <div class="articles">
        <article-card v-bind="obj" v-for="obj in objs"></article-card>
      </div>
      <div class="catalogs">

      </div>
    </div>
    <nav-button class="test" title="NotFound" url="./NotFound" :ico="true">
      <font-awesome icon="question"></font-awesome>
    </nav-button>
  </div>
</template>

<style scoped>
.body {
  width: 100%;
  height: 100%;
  background: rgba(242, 242, 242, 1);
  z-index: -100;
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
  /* aspect-ratio: 39 / 54;
  width: 20%;
  min-height: 400px;
  background-color: rgba(128, 128, 128, 0.599);
  border-radius: 12px; */
  position: fixed;
  left: 5%;
  top: 12%;
}
.catalogs {
  width: 400px;
  height: 100vh;
  position: fixed;
  background-color: rgba(255, 192, 203, 0.35);
  top: 0px;
  right: 2%;
}
.test {
  position: fixed;
  bottom: 20px;
  left: 20px;
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
@media (max-width: 1100px) {
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
