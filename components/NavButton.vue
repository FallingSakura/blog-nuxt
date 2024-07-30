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
  <div class="nav-btn"><NuxtLink :to="url">{{ title }}</NuxtLink></div>
</template>

<style scoped>
.nav-btn {
  position: relative;
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  background: rgba(71, 71, 71, 0.229);
  padding: 8px 10px;
  border-radius: 5px;
  left: 10px;
  font-size: 16px;
}
</style>
