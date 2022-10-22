import { iAm } from "./aboutMe";
import { projects } from "./projects";
import { defineStore } from "pinia";

export const useCVStore = defineStore("cv", {
  state: () => ({
    iAm: {
      ...iAm,
      education: projects.find((p) => p.key === "ed_tnu"),
      certification: projects.filter((p) => p.key.substr(0, 2) === "cu"),
    },
  }),
});
