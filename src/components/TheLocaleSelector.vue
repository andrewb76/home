<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "locale-changer",
  data: () => {
    return { langs: ["ru", "en"] };
  },
});
</script>

<style scoped lang="scss"></style>
