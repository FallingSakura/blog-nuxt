<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: 'Title',
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
  <NuxtLink :to="props.url" class="nav-btn">
    <div v-if="props.ico" class="ico"><slot></slot></div>
    <span>{{ props.title }}</span>
  </NuxtLink>
</template>

<style scoped>
.nav-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  background: rgba(52, 48, 48, 0.238);
  padding: 14px 18px;
  border-radius: 5px;
  font-size: 18px;
  width: 100px;
  min-width: fit-content;
  max-width: 200px;
  height: fit-content;
}
.ico {
  margin-right: 10px;
}
</style>
