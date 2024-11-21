<template>
  <div class="body">
    <header>
      <nav-bar/>
    </header>
    <main>
      <!-- <div></div> -->
      <div class="content">
        <slot/>
      </div>
      <!-- <div></div> -->
    </main>
    <footer>
      <nav-button title="Back to HOME" url="/"/>
    </footer>
  </div>
</template>

<style scoped>
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(242, 242, 242, 1);
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
  background: rgba(230, 230, 230, 1);
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