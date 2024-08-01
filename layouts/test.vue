<template>
  <div class="body">
    <header>
      <nav-bar></nav-bar>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <nav-button title="Back to HOME" url="/"></nav-button>
    </footer>
  </div>
</template>

<style scoped>
.body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
header {
  width: 100%;
}
main {
  flex-grow: 1;
}
footer {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>