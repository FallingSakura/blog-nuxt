<template>
  <div>
    <header>
     <h1>Welcome to my First Nuxt Project.</h1>
      <nav>
        <nav-button title="Home" url="/"></nav-button>
        <nav-button title="Archives"></nav-button>
        <nav-button title="Essays"></nav-button>
        <nav-button title="About"></nav-button>
      </nav>
    </header>
    <main>
      <div class="content">
        <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officia voluptatem nostrum laboriosam eligendi iure voluptatum deleniti exercitationem eveniet provident nam inventore, vero soluta repellat quidem placeat deserunt reprehenderit fugit.</p>
        <h1 class="dev">Deving...</h1>
      </div>
    </main>
    <footer>
      <div class="links">
        <h1>This is Footer.</h1>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
header {
  display: flex;
  flex-wrap: wrap;
  background: #ffc9c9a6;
  padding: 40px;
}
header h1 {
  flex-basis: 100%;
  color: #a04d4d;
  cursor: pointer;
  font-size: 2vw;
  margin-bottom: 20px;
}
nav {
  display: flex;
  width: 30%;
  min-width: 200px;
  align-content: center;
  justify-content: space-between;
}
p {
  font-size: 1.2rem;
}
.content {
  flex-direction: column;
  display: flex;
  padding: 50px;
  height: 120vh;
  background: linear-gradient(to bottom, #ffc9c9a6, #fff);
}
.dev {
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 4rem;
  color: rgba(128, 128, 128, 0.13);
}
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b4b4b4;
  height: 10vh;
  width: 100%;
  position: fixed;
  bottom: 0;
}
footer h1 {
  font-size: 4rem;
  color: rgba(128, 128, 128, 0.13);
}
</style>
