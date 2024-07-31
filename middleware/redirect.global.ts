export default defineNuxtRouteMiddleware((to, from) => {
  if (to.name == null) {
    return navigateTo('/NotFound')
  }
})