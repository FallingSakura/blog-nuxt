<template>
  <div class="search-btn active">
    <!-- <input type="text" class="input" placeholder="Search..."> -->
    <font-awesome icon="search"></font-awesome>
  </div>
</template>

<style scoped>
.search-btn {
  display: flex;
  justify-content: flex-end;
  position: relative;
  aspect-ratio: 1 / 1;
  height: 100%;
  background: rgba(17, 0, 0, 0.371);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  cursor: pointer;
}
.search-btn .input::placeholder {
  color: rgba(0, 0, 0, 0);
}
.search-btn .input {
  background-color: transparent;
  font-size: 18px;
  height: 100%;
  aspect-ratio: 1;
  /* border-radius: 10px; */
  transition: all 0.3s ease;
  /* position: absolute; */
  background-color: rgba(17, 0, 0, 0.371);
  /* z-index: -1; */
  /* padding: 20px; */
}
.search-btn .input:focus {
  outline: none;
}
.search-btn.active .input {
  width: 300px;
}
</style>