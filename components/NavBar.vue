<template>
  <div class="nav-bar">
    <div class="icon">
      <img src="https://cdn.jsdelivr.net/gh/FallingSakura/Source@main/img/202305211656851.webp"> 
      <h2 class="title">FallingSakura</h2>
    </div>
    <div class="nav">
      <nav-button title="Home" url="./" :ico="true">
        <font-awesome icon="house"></font-awesome>
      </nav-button>
      <nav-button title="Archives" url="./archives" :ico="true">
        <font-awesome icon="box-archive"></font-awesome>
      </nav-button>
      <nav-button title="Albums" url="./albums" :ico="true">
        <font-awesome icon="images"></font-awesome>
      </nav-button>
      <nav-button title="About" url="./about" :ico="true">
        <font-awesome icon="circle-info"></font-awesome>
      </nav-button>
      <div class="button">
        <div class="search">
          <i></i>
        </div>
        <div class="toggle-btn">
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.nav-bar {
  display: flex;
  height: 8vh;
  justify-content: space-between;
  flex-direction: row;
  background-color: rgba(135, 207, 235, 0.415);
  width: 100%;
  z-index: 100;
}
.icon {
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-around;
  line-height: 100%;
  font-size: 1.8em;
  font-weight: bold;
  color: #fafafa;
  padding-left: 30px;
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
  justify-content: space-around;
  align-items: center;
}
.button {
  width: 100px;
  height: 100%;
}
</style>
