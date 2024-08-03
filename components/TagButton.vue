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
  background-color: rgba(121, 121, 121, 0.336);
  border-radius: 10px;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 12px;
}
</style>