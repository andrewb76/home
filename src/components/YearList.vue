<template>
  <transition-group name="years-list" tag="div" class="years-list flex">
    <div
      class="year grow flex"
      v-for="year, i in $store.state.years"
      :key="year"
      :style="{'--i': i, '--total': $store.state.years.length}"
      @mouseover="onYearMouseOver"
      @mouseout="onYearMouseOut"
      @click.prevent="onYearClick"
    >
      <div
        class="year-title flex"
        :class="{ 'year-title-selected': $store.state.selected.years.includes(year) || $store.state.currentGroup.years.includes(year) }"
      >{{ year }}</div>
    </div>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

export default defineComponent({
  name: 'YearList',
  data() {
    return {
      hover$: new Subject(),
    }
  },
  methods: {
    onYearClick(ev) {
      this.$store.commit('setHover', { area: 'year', value: ev.target.textContent.trim() });
      this.$store.commit('changeDialogMode');
    },
    onYearMouseOver(ev) {
      // console.log('>>> onYearMouseOver', ev.target.children[0].textContent.trim());
      this.hover$.next({ area: 'year', value: ev.target.textContent.trim() });
    },
    onYearMouseOut() {
      console.log('>>> onYearMouseOut');
      this.hover$.next({ area: 'year', value: '' });
    },
  },
  mounted() {
    this.hover$
      .pipe(debounceTime(600))
      .subscribe(({ area, value }) => {
        console.log(area, value);
        this.$store.commit('setHover', { area, value });
      });
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.years-list {
  width: 100%;
  height: 100%;

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

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter { transform: translateX(-1em); }
  &-leave-to { transform: translateX(1em); }

  .year {
    cursor: pointer;
    .year-title {
      width: 100%;
      padding: 5px;
      writing-mode: tb-rl;
      rotate: 180deg;
      --str-color-h: #520000;
      --str-color: #222222;
      --fill-color: #fd3535;
      font: 550 1.8rem Raleway, sans-serif;
      text-decoration: none;
      -webkit-text-stroke: 1px var(--str-color);
      background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
      // background: linear-gradient(#e66465, #9198e5) left / 0 no-repeat;
      color: transparent;
      background-clip: text;
      transition: 0.5s linear;
      background-size: 100% 0;
      background-position: top;

      &:hover, &-selected{
        -webkit-text-stroke: 1px var(--str-color-h);
        background-size: 100% 100%;
        // text-shadow: 1px 1px 3px #fd3535;
      }
    }
  }
}
.year {
  justify-content: center;
  // item
  // overflow: hidden;
}
</style>
