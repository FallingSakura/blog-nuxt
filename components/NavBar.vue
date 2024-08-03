<template>
  <div class="nav-bar">
    <!-- <div class="icon"> -->
      <nuxt-link class="icon" to="/">
        <img src="https://cdn.jsdelivr.net/gh/FallingSakura/Source@main/img/202305211656851.webp"> 
        <h2 class="title">FallingSakura</h2>
      </nuxt-link>
    <!-- </div> -->
    <div class="nav">
      <div class="button1">
        <nav-button class="nav-button" title="Home" url="./" :ico="true">
          <font-awesome icon="house"></font-awesome>
        </nav-button>
        <nav-button class="nav-button" title="Archives" url="./archives" :ico="true">
          <font-awesome icon="box-archive"></font-awesome>
        </nav-button>
        <nav-button class="nav-button" title="Albums" url="./albums" :ico="true">
          <font-awesome icon="images"></font-awesome>
        </nav-button>
        <nav-button class="nav-button" title="About" url="./about" :ico="true">
          <font-awesome icon="circle-info"></font-awesome>
        </nav-button>
      </div>
      <search-button class="search"></search-button>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  display: flex;
  height: 8vh;
  justify-content: space-between;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.415);
  width: 100%;
  overflow: hidden;
  z-index: 100;
}
.icon {
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-evenly;
  color: #fafafa;
  padding-left: 30px;
}
.title {
  line-height: 100%;
  font-size: 2rem;
  font-weight: bold;
}
.icon img {
  width: 50px;
  border-radius: 20%;
}
.nav {
  display: flex;
  line-height: 100%;
  color: #f0f0f0;
  font-size: 1em;
  flex-grow: 0.7;
  justify-content: center;
  align-items: center;
}
.button1 {
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.nav-button {
  margin-right: 50px;
}
</style>
