<template>
  <div class="body">
    <header>
      <nav-bar></nav-bar>
    </header>
    <main>
      <div></div>
      <div class="content">
        <slot></slot>
      </div>
      <div></div>
    </main>
    <footer>
      <nav-button title="Back to HOME" url="/"></nav-button>
    </footer>
  </div>
</template>

<style scoped>
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
header {
  width: 100%;
}
main {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
}
.content {
  min-height: 100%;
  width: 50%;
  background: rgba(240, 240, 240, 1);
  padding: 50px;
  border-radius: 10px;
}
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>