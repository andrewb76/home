<template>
  <transition-group name="projects-list" tag="div" class="projects-list flex justify-self-stretch">
    <button
      class="project flex"
      v-for="project, i in $store.state.projectKeys"
      :key="project"
      :style="{'--i': i, '--total': $store.state.projectKeys.length}"
      :class="{ 'project-selected': $store.state.selected.projects.includes(project) || $store.state.currentGroup.projects.includes(project) }"
      @click.prevent="onProjectClick(project)"
      @mouseover="onProjectMouseOver(project)"
      @mouseout="onProjectMouseOut"
    >
      <div class="project-title flex">{{ $store.state.projectDic[project].short }}</div>
      <img
        class="project-flag p-1 filter-green absolute"
        :title="$store.state.projectDic[project].title[$i18n.locale]"
        :src="getFlagImgUrl($store.state.projectDic[project].country)"
        style="opacity: 0.8; scale: 0.8;"
      />
    </button>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

export default defineComponent({
  data() {
    return {
      hover$: new Subject(),
    }
  },
  methods: {
    getFlagImgUrl(cc: string) {
      try {
        return require(`@/assets/img/icons/flags/${cc}.png`);
      } catch {
        return require(`@/assets/img/icons/flags/ru.png`);
      }
    },
    onProjectClick(pr) {
      this.$store.commit('setHover', { area: 'project', value: pr });
      this.$store.commit('changeDialogMode');
    },
    onProjectMouseOver(pr) {
      // console.log('>>> onProjectMouseOver', arguments);
      this.hover$.next({ area: 'project', value: pr });
    },
    onProjectMouseOut() {
      this.hover$.next({ area: 'project', value: '' });
    },
  },
  mounted() {
    this.hover$
      .pipe(debounceTime(600))
      .subscribe(ev => {
        this.$store.commit('setHover', ev);
      });
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project {
  &-flag {
    top: -10px;
    right: -10px;
    filter: grayscale(100%);
  }

}
.projects-list {
  &-move {
    transition: opacity .5s linear, transform .5s ease-in-out;
  }

  &-leave-active {
    transition: opacity .4s linear, transform .4s cubic-bezier(.5,0,.7,.4); //cubic-bezier(.7,0,.7,1);
    transition-delay: calc( 0.1s * (var(--total) - var(--i)) );
  }

  &-enter-active {
    transition: opacity .5s linear, transform .5s cubic-bezier(.2,.5,.1,1);
    transition-delay: calc( 0.03s * var(--i) );
  }

  &-enter-from {
    transform: rotation(360deg);
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter { transform: translateX(-1em); }
  &-leave-to { transform: translateX(1em); }

}


.project {
  width: 100%;
  cursor: pointer;
  color: rgb(253, 247, 238);
  text-shadow: rgb(83, 68, 50) 3px 4px 3px;
  overflow: hidden;
  display: flex;
  //   // width: 40px;
  //   position: relative;
  border: 3px solid rgba(44, 44, 44, 0.855);
  // margin: 1px;
  padding: 2px;
  margin: 1px;
  background-color: rgba(189, 170, 158, 0.3);
  position: relative;

  &::after {
    position: relative;
    display: block;
    overflow: visible;
    content: "";
    width: 10px;
    height: 10px;
    left: -20px;
    transition-duration: 1s;
    background-color: rgba(192, 31, 31, 0.562);
    text-shadow: rgb(83, 68, 50) 3px 4px 3px;
  }

  &:hover, &-selected {
    background-color: rgba(189, 170, 158, 0.5);
  }

  &:hover::after, &-selected::after {
    height: 160px;
    bottom: 0;
    background-color: rgb(252, 2, 2);
  }

  &:hover &-flag {
    transition: 0.4s;
    top: -5px;
    right: -5px;
    filter: grayscale(0);
  }

  &-title {
    z-index: 1;
    rotate: 180deg;
    translate: 0 -15px;
    writing-mode: vertical-rl;
    text-align: start;
    padding-bottom: 25px;
  }
}
</style>
