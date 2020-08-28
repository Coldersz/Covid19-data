<template>
  <div id="app" class="flex flex-col min-h-screen bg-white">
    <Nav />
      <router-view class="flex-grow" />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default {
  components: {
    Nav,
    Footer
  }
};
</script>
