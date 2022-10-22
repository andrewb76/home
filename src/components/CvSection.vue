<template>
  <section :class="s_name" class="p-3 mt-10">
    <slot name="head">
      <h3 :class="`${s_name}-head`" class="text-2xl ml-6 mb-3">{{ s_name }}</h3>
    </slot>
    <div :class="`${s_name}-body`"><slot /></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CvSection",
  props: {
    s_name: {
      type: String,
      required: false,
      default: "",
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
