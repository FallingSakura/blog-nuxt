<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "tag",
  }
})
</script>
<template>
  <div class="tag-button">
    <span>#{{ props.title }}</span>
  </div>
</template>
<style scoped>
.tag-button {
  min-width: 60px;
  min-height: 32px;
  background-color: #ff6b6bc0;
  border-radius: 10px;
  color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 15px;
}
.tag-button:hover {
  background-color: #ff4b4b;
}
</style>