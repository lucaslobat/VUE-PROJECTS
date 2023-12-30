/* Modules import */
import mentorGetters from "./mentors-getters";
import mentorsMutations from "./mentors-mutations";
import mentorsActions from "./mentors-actions";


const mentorModule = {
  namespaced: true,
  state: {
    mentors: [
      {
        id: 1,
        firstName: "Julian",
        lastName: "Casas",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit.",
        rate: 15,
        technologies: ["Vue", "Javascript", "HTML", "CSS"],
        areas: ["frontend"]
      },
      {
        id: 2,
        firstName: "Timothy",
        lastName: "White",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit.",
        rate: 15,
        technologies: ["C#", ".NET"],
        areas: ["backend"]
      },
      {
        id: 3,
        firstName: "Lucas",
        lastName: "Lobato",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit.",
        rate: 25,
        technologies: ["Vue", "Javascript", "HTML", "CSS","C#", ".NET"],
        areas: ["backend","frontend"]
      },
      {
        id: 4,
        firstName: "Tomas",
        lastName: "Aguirre",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit.",
        rate: 25,
        technologies: ["Javascript", "HTML", "CSS","C#", ".NET", 'Python'],
        areas: ["backend"]
      }
    ],
  },
  getters: mentorGetters,
  mutations: mentorsMutations,
  actions: mentorsActions
};

export default mentorModule;
