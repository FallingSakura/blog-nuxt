<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: '#',
    }
  },
  data() {
    return {
    }
  },

}
</script>
<template>
  <!-- <button id="home"><a :href="url">{{ title }}</a></button> -->
  <button id="home"><NuxtLink :to="url">{{ title }}</NuxtLink></button>
</template>

<style scoped>
#home {
  position: relative;
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  background: rgba(71, 71, 71, 0.229);
  padding: 8px, 10px;
  border-radius: 5px;
  left: 10px;
  width: 18%;
  font-size: 16px;
}
#home a {
  text-align: center;
}
</style>
