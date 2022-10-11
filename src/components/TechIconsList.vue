<template>
  <transition-group
    name="tech-icons-list"
    tag="div"
    class="tech-icons-list flex justify-around"
    @before-enter="onBeforeEnter"
    @before-leave="onBeforeLeave"
    @enter="onEnter"
    @leave="onLeave"
  >
    <img
      v-for="tt, i in $store.state.selected.techs"
      :key="tt"
      :title="tt"
      :data-index="i"
      class="tech-icons-list-icon p-1 filter-green"
      :src="getTechImgUrl(tt)"
      style="opacity"
    />
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap'


export default defineComponent({
  name: 'TechIconsList',
  data() {
    return {
    }
  },
  methods: {
    getTechImgUrl(tech: string) {
      try {
        return require(`@/assets/img/icons/${tech}.svg`);
      } catch {
        return require(`@/assets/img/icons/amazons3.svg`);
      }
    },
    onBeforeEnter(el) {
      console.log('onBeforeEnter', el);
      el.style.opacity = 0;
      // el.style.transform = 'scale(3)';
      el.style.height = 0;
    },
    onBeforeLeave(el) {
      console.log('onBeforeLeave', el);
      gsap.to(el, {
        opacity: 0,
        ease: "elastic",
        height: '5.6em',
        delay: el.dataset.index * 0.05,
      })

    },
    onEnter(el, done) {
      console.log('onEnter', el);
      gsap.to(el, {
        opacity: 1,
        ease: "elastic",
        height: '3.6em',
        // delay: el.dataset.index * 0.05,
        onComplete: done
      })
    },
    onLeave(el, done) {
      console.log('onLeave', el);
      gsap.to(el, {
        opacity: 0,
        height: 0,
        // delay: el.dataset.index * 0.05,
        onComplete: done
      })
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.filter-green{
  // filter: invert(10%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
}

.tech-icons-list {
  width: 100%;
  height: 100%;
  opacity: 0.3;

  // &-icon {
  //   fill:antiquewhite,
  // }

  &-move, &-leave-active, &-enter-active {
    transition: all 1s ease;
    // transition-delay: calc( 0.02s * var(--i) );
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* ensure leaving items are taken out of layout flow so that moving
    animations can be calculated correctly. */
  &-leave-active {
    position: absolute;
  }

}
</style>
