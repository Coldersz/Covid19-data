<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-10">
      <img src="@/assets/logo.png" alt="logo" width="40" class="pr-1">
      <span class="font-semibold text-xl tracking-tight">Kawal Corona</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-left lg:w-auto">
      <div class="text-sm text-gray-600 lg:flex-grow" id="nav">
        <router-link class="mx-2" to="/">Home</router-link>
        <router-link class="mx-2" to="/global">Global</router-link>
        <router-link class="mx-2" to="/id">Local</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
@tailwind base;

#nav a.router-link-exact-active {
  @apply text-gray-300;
}
</style>
