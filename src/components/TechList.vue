<template>
  <vue-word-cloud :words="$store.state.techKeys">
    <template slot-scope="{text, weight, word}">
      <button
        class="tech"
        :class="{ 'tech-selected': $store.state.selected.techs.includes(word[0]) || $store.state.currentGroup.techs.includes(word[0]) }"
        :title="weight"
        style="cursor: pointer;"
        @click.prevent="onTechClick(word)"
        @mouseover="onTechMouseOver(word)"
        @mouseout="onTechMouseOut"
      >
        {{ text }}
      </button>
    </template>
  </vue-word-cloud>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VueWordCloud = require('vuewordcloud');

export default defineComponent({
  name: 'TechList',
  data() {
    return {
      hover$: new Subject(),
    }
  },
  methods: {
    onTechClick(tag: [string, number]) {
      this.$store.commit('setHover', { area: 'tech', value: tag[0] });
      this.$store.commit('changeDialogMode');
    },
    onTechMouseOver(tag: [string, number]) {
      // console.log('>>> onTechMouseOver', d);
      this.hover$.next({ area: 'tech', value: tag[0] });
    },
    onTechMouseOut() {
      // console.log('>>> onTechMouseOut', tech);
      this.hover$.next({ area: 'tech', value: '' });
    },
  },
  components: {
    [VueWordCloud.name]: VueWordCloud,
  },
  mounted() {
    interface hoverParams {
      area: string;
      value: string
    }
    this.hover$
      .pipe(debounceTime(600))
      .subscribe((params) => {
        const { area, value } = params as hoverParams;
        console.log(area, value);
        this.$store.commit('setHover', { area, value });
      });
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tech {
  opacity: 0.5;
  color: dark-gray;
  text-shadow: 2px white;
  transition: opacity 1s;
  text-shadow: 2px 2px 5px #fff;

  &:hover {
    color: #fff;
    animation: glow 1s ease-in-out infinite alternate;
  }

  &-selected {
    opacity: 0.8;
    color: #fff;
    animation: glow 1s ease-in-out infinite alternate;
  }


  @keyframes glow {
    $base1-color: #c0b098;
    $base2-color: #f0d6b9;
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px $base1-color, 0 0 40px $base1-color, 0 0 50px $base1-color, 0 0 60px $base1-color, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px $base2-color, 0 0 40px $base2-color, 0 0 50px $base2-color, 0 0 60px $base2-color, 0 0 70px $base2-color, 0 0 80px #ff4da6;
    }
  }

}
</style>
