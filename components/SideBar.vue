<script setup>

</script>
<template>
  <div class="sidebar">
    <div class="info">
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam placeat mollitia voluptate dicta explicabo suscipit ut accusantium ipsam vitae nihil provident, molestias maiores corporis beatae consequatur modi saepe expedita.</p>
    </div>
    <ul class="items">
      <link-button class="item"/>
      <link-button class="item"/>
      <link-button class="item"/>
      <link-button class="item"/>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 400px;
  aspect-ratio: 39 / 54;
  /* background-color: white; */
  color: rgba(123, 123, 123, 0.741);
}
.info {
  width: 100%;
  height: fit-content;
  display: inline-block;
}
.sidebar h2 {
  color: rgba(0, 0, 0, 0.705);
  font-size: 2em;
}
.items {
  /* background: grey; */
  width: 100%;
  height: 60%;
  padding: 10px;
  display: inline-block;
}
.item {
  margin-top: 20px;
}
@media (max-width: 1100px) {
  .sidebar {
    width: 75%;
    aspect-ratio: unset;
    padding: 50px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info {
    width: 60%;
  }
  .items {
    width: 40%;
    /* text-align: center; */
    /* display: flex; */
  }
  .item {
    width: 15vw;
    height: 40px;
    /* height: 6vh; */
  }
}
@media (min-width: 700px) and (max-width: 1100px) {
  .info {
    margin-right: 5vw;
  }
}
@media (max-width: 700px) {
  .sidebar {
    flex-direction: column;
    padding: unset;
    margin: 4vh 0;
    width: 90%;
  }
  .info {
    width: 100%;
  }
  .items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: unset;
  }
  .item {
    margin-right: 5%;
    min-width: 100px;
  }
}
</style>