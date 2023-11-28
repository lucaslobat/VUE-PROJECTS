/* Modules import */
import mentorGetters from "./mentors-getters";
import mentorsMutations from "./mentors-mutations";
import mentorsActions from "./mentors-actions";


const mentorStore = {
  namespaced: true,
  state: {
    mentors: [
      {
        id: 1,
        firstName: "Julian",
        lastName: "Casas",
        biography:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit.",
        rate: 15,
        technologies: ["Vue.js", "Javascript", "HTML", "CSS"],
        areas: ["frontend"]
      },
      {
        id: 2,
        firstName: "Timothy",
        lastName: "White",
        biography:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit.",
        rate: 15,
        technologies: ["C#", ".NET"],
        areas: ["backend"]
      },
      {
        id: 3,
        firstName: "Lucas",
        lastName: "Lobato",
        biography:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit.",
        rate: 25,
        technologies: ["Vue.js", "Javascript", "HTML", "CSS","C#", ".NET"],
        areas: ["backend","frontend"]
      }
    ],
  },
  getters: mentorGetters
};

export default mentorStore;
