import coachGetters from "./coachGetters.js";

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
      },
      {
        id: 2,
        firstName: "Timothy",
        lastName: "White",
        biography: "Hello, I teach backend development",
        rate: 10,
        technologies: ["C#", ".NET"],
      },
    ],
  },
  getters: coachGetters,
};

export default coachModule;
