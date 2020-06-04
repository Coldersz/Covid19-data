<template>
  <header class="bg-white sm:py-6 shadow-lg sm:flex w-full sm:px-4 relative">
    <div class="flex items-center px-4 py-6 justify-between sm:p-0">
      <div class="flex items-center flex-shrink-0 mr-10">
        <img src="@/assets/logo.png" alt="logo" width="40" class="pr-1" />
        <span class="font-semibold text-xl tracking-tight pr-1">Kawal</span>
        <span class="font-semibold text-xl tracking-tight text-purple-800">Corona</span>
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-500 focus:outline-none hover:bg-gray-200"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 text-center text-sm text-gray-600 items-center pb-4 sm:flex sm:p-0"
      id="nav"
    >
      <router-link class="mx-2 block mt-4 sm:mt-0 focus:outline-none" to="/">Home</router-link>
      <router-link class="mx-2 block mt-4 sm:mt-0 focus:outline-none" to="/global">Global</router-link>
      <router-link class="mx-2 block mt-4 sm:mt-0 focus:outline-none" to="/id">Local</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
@tailwind base;

#nav a.router-link-exact-active {
  @apply text-black;
  @apply font-semibold;
}
</style>
