<template>
  <div
    class="cv-canvas justify-center flex bg-yellow-300 items-center h-min-screen"
  >
    <div class="cv-content w-11/12 top-10 bottom-6 absolute">
      <div class="cv-head flex flex-col p-5">
        <div class="cv__header flex p-10">
          <h1 class="cv__header__title text-4xl mr-6">
            {{ cv.name[$i18n.locale] }}
          </h1>
          <h2 class="cv__header__position text-2xl m-2">
            {{ cv.position[$i18n.locale] }}
          </h2>
        </div>
        <div class="cv__contacts flex justify-evenly text-sm">
          <div class="cv__contacts__contact">
            <a target="_blank" :href="cv.contacts.home.url">{{
              cv.contacts.home.title
            }}</a>
          </div>
          &nbsp;|&nbsp;
          <div class="cv__contacts__contact">
            <a target="_blank" :href="cv.contacts.telegram.url">{{
              cv.contacts.telegram.title
            }}</a>
          </div>
          &nbsp;|&nbsp;
          <div class="cv__contacts__contact">
            <a target="_blank" :href="cv.contacts.phone.url">{{
              cv.contacts.phone.title
            }}</a>
          </div>
          &nbsp;|&nbsp;
          <div class="cv__contacts__contact">
            <a target="_blank" :href="cv.contacts.linkedIn.url">{{
              cv.contacts.linkedIn.title
            }}</a>
          </div>
          &nbsp;|&nbsp;
          <div class="cv__contacts__contact">
            <a target="_blank" :href="cv.contacts.github.url">{{
              cv.contacts.github.title
            }}</a>
          </div>
        </div>
        <div class="cv__header min-w-3"></div>
      </div>
      <div class="cv-main">
        <cv-section s_name="summary">
          <template #head>&nbsp;</template>
          <div class="section__body m-5 text-left">
            {{ cv.summary[$i18n.locale] }}
          </div>
        </cv-section>
        <cv-section s_name="experience">
          <div
            v-for="company in cv.experience"
            :key="company.company['en']"
            class="company"
          >
            <div class="company_position">
              {{ company.position[$i18n.locale] }}
            </div>
            <div class="company_name">
              {{ company.from[$i18n.locale] }} — {{ company.to[$i18n.locale] }}
            </div>
            <div class="company_company">
              {{ company.company[$i18n.locale] }}
            </div>
            <ul class="company_responsibilities ml-2">
              <li v-for="resp in company.responsibilities" :key="resp.en">
                {{ resp[$i18n.locale] }}
              </li>
            </ul>
          </div>
        </cv-section>
      </div>
      <div class="cv-side">
        <cv-section s_name="contacts">
          <div class="section__body flex justify-between">
            <div class="w-1/2">
              <p class="text-left">{{ cv.city[$i18n.locale] }}</p>
              <p class="text-left text-sm">{{ cv.address[$i18n.locale] }}</p>
            </div>
            <div class="w-1/2">
              <p class="text-right">{{ cv.contacts.phone.title }}</p>
              <p class="text-right text-sm">{{ cv.contacts.email.title }}</p>
            </div>
          </div>
        </cv-section>
        <cv-section s_name="educations">
          <div class="section__body text-justify">
            {{ cv.education.description[$i18n.locale] }}
          </div>
        </cv-section>
        <cv-section s_name="languages">
          <ul class="section__body ml-2">
            <li v-for="lang in cv.languages" :key="lang.en">
              {{ lang[$i18n.locale] }}
            </li>
          </ul>
        </cv-section>
        <cv-section s_name="certification">
          <div class="section__body">
            <div
              class="certificate flex flex-col pb-3"
              v-for="cert in cv.certification"
              :key="cert.key"
            >
              <div class="flex justify-between">
                <p class="certificate__title text-sm font-semibold">
                  {{ cert.title[$i18n.locale] }}
                </p>
                <p class="certificate__year text-sm font-light">
                  {{ cert.to.getFullYear() }}
                </p>
              </div>
              <div
                class="flex certificate__description w-full text-left self-start"
              >
                <p class="w-full">{{ cert.description[$i18n.locale] }}</p>
              </div>
            </div>
          </div></cv-section
        >
        <cv-section s_name="skills" class="text-justify">
          <span class="skill-gr" v-for="(skillSet, i) in cv.skills" :key="i">
            &nbsp;<span
              class="skill text-sm"
              v-for="skill in skillSet"
              :key="skill"
              >{{ skill }}&thinsp;</span
            >&nbsp;—&nbsp;
          </span>
        </cv-section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CvSection from "@/components/CvSection.vue"; // @ is an alias to /src
import { useCVStore } from "@/store/cvStore";

export default defineComponent({
  name: "CVView",
  components: {
    CvSection,
  },
  setup() {
    const cv = useCVStore();
    return { cv: cv.iAm };
  },
});
</script>

<style lang="scss" scoped>
.cvCanvas {
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0.3in;
  background-color: rgb(250, 255, 255);
  box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.7);
}

.cv__contacts {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}

@media print {
  @page {
    size: 8.5in 12in;
  }
  .cvCanvas {
    width: 8.5in;
    height: 12in;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0 auto;
    padding: 0;
    line-height: 18px;
  }
}
.cv-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr) 300px;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.cv-head {
  background-color: antiquewhite;
  grid-area: 1 / 1 / 2 / 6;
}
.cv-main {
  background-color: azure;
  grid-area: 2 / 1 / 6 / 5;
}
.cv-side {
  background-color: rgb(204, 240, 204);
  grid-area: 2 / 5 / 6 / 6;
}
</style>
