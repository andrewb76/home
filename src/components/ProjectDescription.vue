<template>
  <div class="project-description flex h-full justify-evenly items-stretch border-solid border-8 border-l-cool-gray-800 border-opacity-75 m-4 rounded-3xl">
    <div
      v-for="pr in $store.state.selected.projects"
      class="project-box flex h-full w-full flex-col odd:flex-col-reverse justify-evenly overflow-visible"
      :key="pr"
    >
      <div class="project-title text-xl">{{ $store.state.projectDic[pr].short }}</div>
      <img
        class="w-24 p-2 self-center"
        :src="getPrImgUrl($store.state.projectDic[pr].img)"
      />
    </div>
    <!-- <p v-if="$store.state.selected.projects.length === 1">
      {{ $store.state.projectDic[$store.state.selected.projects[0]].title[$i18n.locale] }}
    </p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectDescription',
  data() {
    return {
    }
  },
  methods: {
    getPrImgUrl(pr: string) {
      try {
        return require(`@/assets/img/screens/${pr}`);
      } catch {
        return require(`@/assets/img/screens/todo.png`);
      }
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
