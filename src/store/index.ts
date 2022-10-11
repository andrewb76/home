import Vue from 'vue'
import Vuex from 'vuex'
import * as R from "ramda";
import { projects, IProject } from "./data/projects";

Vue.use(Vuex)

const getPrRage = (pr: IProject) => R.range(pr.from.getFullYear(), (pr.to || pr.from).getFullYear() + 1).map(y => y.toString())
const defaultTs = (pr: IProject) => R.defaultTo([])(R.prop('techStack', pr));
const inTheYear = (year: string) => R.pipe(getPrRage, R.includes(year));
const filterProjectByTech = (tech: string) => R.pipe(
  defaultTs,
  R.includes(tech),
  // R.tap(v => console.log(v))
);
  // R.prop('techStack'), R.includes(tech))
  //.compose(R.includes(tech), R.prop('techStack')));
const projectsTechList = R.pipe(
  R.map(defaultTs),
  R.unnest,
  R.sortBy(R.identity),
  R.uniqBy(R.identity),
  // R.tap(v => console.log(v))
);

type TTech = [string, number];
interface group {
  years: string[],
  projects: string[],
  techs: string[],
}

const emptyGr: group = {
  years: [],
  projects: [],
  techs: [] ,
};

const initialState = {
  hover: {
    year: '',
    project: '',
    tech: '',
  },
  selected: emptyGr,
  currentGroup: emptyGr,
  projects: projects as Array<IProject>,
  projectDic: projects.reduce((acc, pr) => ({
    ...acc,
    [pr.key]: pr
  }), {} as {[key: string]: IProject}),
  projectKeys: [] as string[],
  techKeys: [] as TTech[],
  years: [] as Array<string>,
};

export default new Vuex.Store({
  state: { ...initialState },
  mutations: {
    init (state) {
      console.log('RESET !!!!!!!!!!!!!!!!!!!!! once');
      state.years = [];
      state.projectKeys = [];
      setTimeout(() => {
        state.years = R.pipe(
          R.map(getPrRage),
          R.unnest,
          R.uniq,
          R.sort((a, b) => a.localeCompare(b)),

          )(state.projects);
          state.projectKeys = R.pipe(R.map(R.prop('key')))(state.projects);
          state.techKeys = R.pipe(
            R.map(defaultTs),
            R.unnest,
            R.countBy(R.identity),
            R.toPairs,
            R.map(p => [p[0], p[1]]),
            R.tap(d=>console.log(d))
        )(state.projects) as TTech[];
      }, 10);

      console.log('INIT !!!!!!!!!!!!!!!!!!!!! once');
      // state = { ...initialState };

    },
    changeDialogMode (state) {
      if (!state.currentGroup.projects.length) {
        state.currentGroup = { ...state.selected };
      } else {
        state.currentGroup = emptyGr;
      }
    },
    setHover (state, { area, value }) {
      if (!value) {
        state.hover = { year: '', project: '', tech: '' };
        state.selected = { years: [], projects: [], techs: [] };
      } else if (area === 'year') {
        state.hover = { year: value, project: '', tech: '' };
        const yearFilter = inTheYear(value);
        const prList = R.filter(yearFilter, state.projects);
        state.selected = { years: [value], projects: R.map(R.prop('key'), prList), techs: projectsTechList(prList) };
      } else if (area === 'project') {
        state.hover = { year: '', project: value, tech: '' };
        const pr = state.projectDic[value];
        state.selected = { years: getPrRage(pr), projects: [value], techs: R.sortBy(R.identity, pr.techStack) };
      } else if (area === 'tech') {
        state.hover = { year: '', project: '', tech: value };
        const prList = R.filter(filterProjectByTech(value), state.projects);
        state.selected = {
          years: R.pipe(
                  R.map(getPrRage),
                  R.unnest,
                  R.uniq,
                  R.sortBy(R.identity)
                )(prList),
          projects: R.map(R.prop('key'), prList),
          techs: [value]
        };
      }
    }
  },
  getters: {
    projectRange: () => (pr: IProject) => {
      return getPrRage(pr);
    }
  },
  actions: {
  },
  modules: {
  }
})
