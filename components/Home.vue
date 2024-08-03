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
    <nav-button class="test" title="NotFound" url="./NotFound" :ico="true">
      <font-awesome icon="question"></font-awesome>
    </nav-button>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  height: fit-content;
  background: rgba(242, 242, 242, 1);
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  flex-grow: 1;
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
  /* width: 20%; */
  aspect-ratio: 39 / 54;
  height: 50vh;
  min-height: 400px;
  background-color: rgba(128, 128, 128, 0.599);
  border-radius: 12px;
  position: fixed;
  left: 5%;
  top: 20%;
}
.catalogs {
  width: 400px;
  height: 100vh;
  position: fixed;
  background-color: rgba(255, 192, 203, 0.35);
  top: 0;
  right: 2%;
  z-index: 1;
}
.test {
  margin: 30px;
}
</style>
