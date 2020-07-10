<template>
  <header class="bg-white sm:flex flex-wrap w-full sm:px-4 fixed transition-all duration-500 transform" id="header">
    <div class="flex items-center px-4 py-6 justify-between sm:p-0">
      <div class="flex items-center flex-shrink-0 mr-10">
        <img src="@/assets/logo.png" alt="logo" width="40" class="pr-1" />
        <span class="font-semibold text-xl tracking-tight pr-1">Kawal</span>
        <span class="font-semibold text-xl tracking-tight text-purple-800">Corona</span>
      </div>
      <div class="sm:hidden">
        <button
          @click="check()"
          type="button"
          class="block text-gray-500 focus:outline-none"
        >
        <div class="nav-icon focus:outline-none">
          <div></div>
        </div>
        </button>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 text-center text-sm text-gray-600 items-center pb-4 sm:flex sm:p-0"
      id="nav"
    >
      <div class="hover:bg-purple-100">
        <router-link class="px-3 sm:w-16 block mt-4 sm:mt-0 focus:outline-none sm:py-6" to="/">Home</router-link>
      </div>
      <div class="hover:bg-purple-100">
        <router-link class="px-3 sm:w-16 block mt-4 sm:mt-0 focus:outline-none sm:py-6" to="/global">Global</router-link>
      </div>
      <div class="hover:bg-purple-100">
        <router-link class="px-3 sm:w-16 block mt-4 sm:mt-0 focus:outline-none sm:py-6" to="/lokal">Lokal</router-link>
      </div>
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
  },
  
  methods: {
    check() {
      this.isOpen = !this.isOpen;
      let nav = document.querySelector('.nav-icon');
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
      } else {
        nav.classList.add('open');
      }
    },
    handleScroll() {
      let header = document.querySelector('#header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
};
</script>

<style scoped>
@tailwind base;

header {
  z-index: 10;
}

.scrolled {
  @apply shadow-xl;
  border-bottom: 0px
}

#nav a.router-link-exact-active {
  @apply text-black;
  @apply font-semibold;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.nav-icon {
  margin: .5em;
  width: 36px;
}

.nav-icon:after, 
.nav-icon:before, 
.nav-icon div {
  background-color: #aaa;
  border-radius: 3px;
  content: '';
  display: block;
  height: 4px;
  margin: 8px 0;
  transition: all .2s ease-in-out;
  outline: 0;
}

.nav-icon.open:before {
  transform: translateY(12px) rotate(135deg);
  outline: 0;
}

.nav-icon.open:after {
  transform: translateY(-12px) rotate(-135deg);
  outline: 0;
}

.nav-icon.open div {
  transform: scale(0);
  outline: 0;
}

</style>
