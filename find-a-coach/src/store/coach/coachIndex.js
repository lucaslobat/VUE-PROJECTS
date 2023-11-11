import coachGetters from "./coachGetters.js";
import coachMutations from "./coachMutations.js";
import coachActions from "./coachActions.js";

const coachModule = {
  namespaced: true,
  state: {
    coaches: [
      {
        id: 1,
        firstName: "Julian",
        lastName: "Casas",
        biography: "Hola, me llamo Julian y enseño desarrollo Frontend",
        rate: 15,
        technologies: ["Vue", "Javascript", "HTML", "CSS"],
        areas:['frontend']
      },
      {
        id: 2,
        firstName: "Timothy",
        lastName: "White",
        biography: "Hello, I teach backend development",
        rate: 10,
        technologies: ["C#", ".NET"],
        areas:['backend']
      },
    ],
  },
  getters: coachGetters,
  mutations: coachMutations,
  actions: coachActions
};

export default coachModule;
