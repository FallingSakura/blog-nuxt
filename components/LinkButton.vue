<script setup>
const props = defineProps({
  url: {
    type: String,
    default: '#',
  },
  title: {
    type: String,
    default: 'Read More'
  }
})
</script>
<template>
  <nuxt-link class="link-button" :to="props.url">
      {{ props.title }}
  </nuxt-link>
</template>
<style scoped>
.link-button {
  max-width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 1rem;
  color: #101;
  border: 2px solid #101;
  border-radius: 5px;
  transition: all 0.3s ease;
  white-space: nowrap;
}
.link-button:hover {
  background-color: #101;
  color: #fafafa;
  font-weight: 700;
  cursor: pointer;
}
@media (max-width: 700px) {
  .link-button {
    font-size: 0.8rem;
  }
}
</style>