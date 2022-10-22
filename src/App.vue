<template>
  <the-main-menu class="main-menu" :links="links" />
  <the-locale-selector class="locale-selector top-5 right-0 fixed" />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheMainMenu from "@/components/TheMainMenu.vue";
import TheLocaleSelector from "@/components/TheLocaleSelector.vue";

export default defineComponent({
  components: {
    TheMainMenu,
    TheLocaleSelector,
  },
  setup: () => {
    return {
      links: [
        { name: "home", url: "/", title: "Home" },
        { name: "about", url: "/about", title: "About" },
        { name: "projects", url: "/projects", title: "Projects" },
        { name: "cv", url: "/cv", title: "CV" },
      ],
    };
  },
});
</script>
<style lang="scss">
.main-menu {
  position: fixed;
}
@media print {
  .main-menu,
  .locale-selector {
    display: none;
  }
}
nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
