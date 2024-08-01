<template>
  <div class="body">
    <nav-bar></nav-bar>
    <div class="content">
      <div class="sidebar">

      </div>
      <div class="articles">
        <article-card></article-card>
        <article-card></article-card>
        <article-card></article-card>
        <article-card></article-card>
        <article-card></article-card>
        <article-card></article-card>
        <article-card></article-card>
      </div>
      <div class="catalogs">

      </div>
    </div>
    <nav-button title="NotFound" url="./NotFound" :ico="true">
      <font-awesome icon="question"></font-awesome>
    </nav-button>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  min-height: 100vh;
  background: rgba(242, 242, 242, 1);
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
}
.articles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.sidebar {
  /* width: 20%; */
  aspect-ratio: 39 / 54;
  height: 50vh;
  min-height: 400px;
  background-color: rgba(128, 128, 128, 0.599);
  position: fixed;
  left: 60px;
  top: 200px;
}
.catalogs {
  width: 400px;
  height: 100vh;
  position: fixed;
  background-color: pink;
  top: 0px;
  right: 40px;
  z-index: 1;
}
</style>
