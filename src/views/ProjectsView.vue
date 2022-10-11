<template>
  <div class="portfolio flex flex-col h-100%">
    <div class="years"><year-list /></div>
    <div class="h-32 ml-20"><project-description /></div>
    <div class="techStackIcons h-10 ml-20"><tech-icons-list /></div>
    <div class="techStack grow"><tech-list /></div>
    <div class="projects"><project-list /></div>
    <!--Overlay Effect-->
    <div
      class="fixed inset-0 bg-gray-600 bg-opacity-80 overflow-y-auto h-full w-full z-10"
      :class="{ 'hidden': !$store.state.currentGroup.projects.length }"
      @click.prevent="switchDialog"
      id="my-modal"
    ></div>
    <!--modal content-->
    <projects-dialog />
  </div>
</template>
<script>
  // @ is an alias to /src
  // import { range } from 'ramda';
  import * as R from 'ramda';
  import YearList from '@/components/YearList.vue'
  import ProjectList from '@/components/ProjectList.vue'
  import TechList from '@/components/TechList.vue'
  import TechIconsList from '@/components/TechIconsList.vue'
  import ProjectDescription from '@/components/ProjectDescription.vue'
  import ProjectsDialog from '@/components/ProjectsDialog.vue'
  // import { onMounted } from 'vue'



  export default {
    name: 'ProjectView',
    components: {
      ProjectList,
      YearList,
      TechList,
      TechIconsList,
      ProjectDescription,
      ProjectsDialog,
    },
    methods: {
      switchDialog() {
        this.$store.commit('changeDialogMode');
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.$store.commit('init')
        // Код, который будет запущен только после
        // отрисовки всех представлений
        // this.years = R.range(1994, 2023).map(y => y.toString());
      })
    },
  }
  </script>

<style lang="scss">

.portfolio {
  height: 100vh;

  .years {
    height: 95px
  }
  .projects {
    height: 170px;
    overflow: hidden;
    // min-height: 210px;
    // height: 210px;
  }

  .projects-dialog {
    left: 50%;
    transform: translateX(-50%);
  }
}

.debug {
  border: solid red 1px
}

</style>
