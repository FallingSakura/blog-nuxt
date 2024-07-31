<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    default: './#'
  },
  ico: {
    type: Boolean,
    default: false,
  }
});

</script>
<template>
  <!-- <button id="home"><a :href="url">{{ title }}</a></button> -->
  <div class="nav-btn">
    <div class="ico" v-if="props.ico"><slot></slot></div>
    <NuxtLink :to="props.url">
      {{ props.title }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.nav-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  background: rgba(99, 95, 95, 0.229);
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 16px;
  width: 100px;
  min-width: fit-content;
  max-width: 200px;
  margin: 30px;
}
.ico {
  margin-right: 10px;
}
</style>
