<template>
  <div
    v-if="pr"
    class="projects-dialog flex min-h-lg opacity-90 absolute top-20 mx-auto border w-3xl shadow-lg rounded-md bg-white z-20"
  >
    <button
      v-if="$store.state.currentGroup.projects.length > 1"
      class="projects-dialog-nav-btn"
      @click="prev"
    >
      <icon name="chevron-double-left" class="" />
    </button>
    <div class="project-content grow">
      <div class="mt-3 text-center">
        <div class="mt-2 px-7 py-3 flex justify-around">
          <p
            v-for="y in $store.state.currentGroup.years"
            :key="y"
            class="projects-dialog-year"
            :class="{ 'projects-dialog-year-selected': $store.getters.projectRange(pr).includes(y) }"
          >
            {{y}}
          </p>
        </div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ pr.short }}
        </h3>
        <div class="mt-2 px-7 py-3">
          <img class="project-img" :src="require(`../assets/img/screens/${pr.img}`)" />
        </div>
        <div class="mt-2 px-7 py-3">
          <p class="text-sm text-gray-500">
            {{ pr.title[$i18n.locale] }}
          </p>
        </div>

        <div class="techStack flex flex-wrap">
          <img
            v-for="tt in pr.techStack"
            :key="tt"
            :title="tt"
            class="w-8 p-1"
            :src="getTechImgUrl(tt)"
          />
            <!-- :class="{ 'active': $store.getters.projectRange(pr).includes(y) }" -->
        </div>

        <div class="mt-2 px-7 py-3">
          <p class="text-sm text-gray-500">
            {{$store.state.currentGroup}}
          </p>
        </div>
        <div class="mt-2 px-7 py-3 flex justify-around">
          <div
            v-for="prM, i in $store.state.currentGroup.projects"
            class="pr-mark"
            :class="{ 'pr-mark-active': i === currentIndex }"
            :key="prM"
          >
            <!-- <p>{{ $store.state.projectDic[prM].country }}</p> -->
            <a href="#" @click="setCurrentPr(i)">
              <img :src="getFlagImgUrl($store.state.projectDic[prM].country)" class="w-6 h-6 scale-75" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <button
      v-if="$store.state.currentGroup.projects.length > 1"
      class="projects-dialog-nav-btn"
      @click="next"
    >
      <icon name="chevron-double-right" class="" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectsDialog',
  data() {
    return {
      currentIndex: 0,
    }
  },
  computed: {
    pr: function () {
      const pr_key = this.$store.state.currentGroup.projects[this.currentIndex];
      return this.$store.state.projectDic[pr_key];
    },
  },
  methods: {
    setCurrentPr(index: number) {
      this.currentIndex = index;
    },
    getTechImgUrl(tech: string) {
      try {
        return require(`@/assets/img/icons/${tech}.svg`);
      } catch {
        return require(`@/assets/img/icons/amazons3.svg`);
      }
    },
    getFlagImgUrl(cc: string) {
      try {
        return require(`@/assets/img/icons/flags/${cc}.png`);
      } catch {
        return require(`@/assets/img/icons/flags/ru.png`);
      }
    },
    close() {
      this.$store.commit('changeDialogMode');
    },
    prev() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.$store.state.currentGroup.projects.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    next() {
      if (this.currentIndex === this.$store.state.currentGroup.projects.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projects-dialog {
  background-color: rgb(245, 237, 226);
  box-shadow: rgb(158, 143, 123) 6px 6px 10px;
  min-height: 75%;
  // max-height: 75%;
  &-year {
    color: rgb(196, 196, 196);

    &-selected {
      color: rgb(83, 83, 83);
    }
  }

  &-nav-btn {
    @apply flex justify-center items-center;
    cursor: pointer;
    min-width: 60px;
    max-width: 60px;
    color: rgb(128, 128, 128);
    transform: scale(0.7);

    &:hover {
      color: rgb(43, 43, 43);
      background-color: rgb(223, 223, 223);
      transform: scale(1);
      transition: all 0.4s;
    }
    // color: white;

    // icon {
    //   width: 100%;
    //   height: 100%;
    // }
  }

  .project-content {
    padding: 15px;
  }
}
.project-img {
  width: 400px;
}
.pr-mark {
  transform: scale(1);
  &-active {
    transform: scale(1.4);
  }

}
</style>
