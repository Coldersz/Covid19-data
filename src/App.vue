<template>
  <div id="app" class="flex flex-col min-h-screen bg-white">
    <Nav />
    <transition name="slither">
      <router-view class="flex-grow"/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default {
  components: {
    Nav,
    Footer
  },
  // data() {
  //   return {transitionName: null}
  // },
  // watch: {
  //   '$route' (to, from) {
  //     if (from.path === '/global') {
  //       this.transitionName = 'drain';
  //     } else {
  //       this.transitionName = 'slither';
  //     }
  //   }
  // }
}
</script>

<style>
.slither-enter-active, .slither-leave-active {
  transition: transform .5s;
}

.slither-enter, .slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to, .slither-leave {
  transform: translateX(0);
}

.drain-enter-active, .drain-leave-active {
  transition: transform 1s;
}

.drain-enter, .drain-leave-to {
  transform: translateY(100%);
}

.drain-enter-to, .drain-leave {
  transform: translateY(0);
}
</style>
