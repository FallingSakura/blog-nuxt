<template>
  <div class="nav-bar">
    <div class="icon">
      <i></i>
      <h2 class="title">FallingBlog</h2>
    </div>
    <div class="nav">
      <div class="item">
        <font-awesome-icon :icon="['fas', 'house']" />
        <nav-button title="Home"></nav-button>
      </div>
      <nav-button title="Archives"></nav-button>
      <nav-button title="Albums"></nav-button>
      <nav-button title="About"></nav-button>
    </div>
    <div class="button">
      <div class="search">
        <i></i>
      </div>
      <div class="toggle-btn">
        <i></i>
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-bar {
  display: flex;
  height: 8vh;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 0 0 50px;
  background-color: skyblue;
  width: 100%;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 100%;
  font-size: 1.8em;
}
.nav {
  display: flex;
  flex-grow: 1;
  line-height: 100%;
  color: #f0f0f0;
  font-size: 1em;
  justify-content: space-around;
  align-items: center;
  padding: 0 25%;
}
.button {
  width: 100px;
  height: auto;
}
.item {
  color: #f0f0f0;
}
</style>
