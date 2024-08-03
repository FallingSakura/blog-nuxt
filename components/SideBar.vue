<script setup>

</script>
<template>
  <div class="sidebar">
    <h2>Title</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam placeat mollitia voluptate dicta explicabo suscipit ut accusantium ipsam vitae nihil provident, molestias maiores corporis beatae consequatur modi saepe expedita.</p>
      <ul class="items">
        <li class="item">
          <span>Link 1</span>
        </li>
        <li class="item">
          <span>Link 2</span>
        </li>
        <li class="item">
          <span>Link 3</span>
        </li>
        <li class="item">
          <span>Link 4</span>
        </li>
      </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 400px;
  aspect-ratio: 39 / 54;
  /* background-color: white; */
  padding: 20px;
  color: rgba(123, 123, 123, 0.741);
}
.sidebar h2 {
  color: rgba(0, 0, 0, 0.705);
  font-size: 2em;
}
.items {
  /* background: grey; */
  width: 100%;
  height: 60%;
  color: rgba(255, 255, 255, 0.728);
  padding: 10px;
}
.item {
  width: 100%;
  height: 20%;
  background: #9f9f9f53;
  margin-top: 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 600;
}
</style>