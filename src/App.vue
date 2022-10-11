<template>
  <div id="app" class="main">
    <nav class="flex flex-col z-30">
      <router-link to="/">{{ $t('mainMenu.home') }}</router-link>
      <router-link to="/about">{{ $t('mainMenu.about') }}</router-link>
      <router-link to="/projects">{{ $t('mainMenu.projects') }}</router-link>
      <div class="cursor-pointer" v-if="$i18n.locale==='en'" @click="$i18n.locale='ru'">РУС</div>
      <div class="cursor-pointer" v-if="$i18n.locale==='ru'" @click="$i18n.locale='en'">EN</div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return { langs: ['en', 'ru'] }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url("~@/assets/img/city-wallpaper-18.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}
.fade {
  &-enter, &-leave-to {
    opacity: 0;
  }

  &-enter-active, &-leave-active {
    transition: opacity 0.5s ease-out;
  }
}
nav {
  position: fixed;
  top: 120px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
