<template>
  <div class="body">
    <nav-bar></nav-bar>
    <nav-button title="NotFound" url="./NotFound" :ico="true">
      <font-awesome icon="question"></font-awesome>
    </nav-button>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  min-height: 100vh;
}

</style>
