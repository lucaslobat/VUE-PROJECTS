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
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin ex id neque rhoncus, vel varius augue cursus. Fusce quis tellus ut erat lacinia suscipit. Phasellus dignissim ligula feugiat interdum rhoncus. Phasellus lacinia, ligula vitae feugiat dapibus, tortor nunc placerat risus, id blandit tortor lacus id eros. Maecenas blandit, quam quis pretium ornare, sem mauris interdum urna, ut laoreet dolor elit elementum leo. Duis malesuada dignissim dui, sit amet bibendum lectus fringilla quis. Donec leo velit, fringilla ac tellus tempus, iaculis aliquam leo. Sed vel augue dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Cras est enim, ultricies eu mi in, vulputate pretium tortor. Phasellus placerat lacus odio, et rutrum justo mattis non. Donec a gravida elit. Duis finibus congue auctor. Cras leo felis, finibus sit amet fringilla nec, ullamcorper eu orci. Cras faucibus finibus massa, vitae lacinia est placerat quis. Quisque pulvinar lacus eu dui fringilla, sed rutrum nisl posuere. Proin nec lectus placerat, consequat tortor vitae, placerat diam. Donec sagittis enim vitae sem faucibus, nec fringilla dui interdum. Donec libero mauris, tempor eu nisl eget, semper sollicitudin tortor. Aliquam pulvinar, erat sed sodales lobortis, sapien dui faucibus ligula, at vulputate odio nibh nec quam. Integer dignissim accumsan porttitor. Nam sit amet ante nunc. Sed luctus est sapien, aliquet porttitor risus viverra eu. Mauris justo risus, porttitor eget justo ut, laoreet tincidunt metus. Praesent sed dictum erat. Proin feugiat libero et nibh maximus venenatis. Maecenas tempor, ipsum quis bibendum posuere, nisi eros ultrices quam, sit amet semper nibh ipsum sit amet diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer eu mauris sagittis, lacinia neque vitae, imperdiet nisi.`,
        rate: 15,
        technologies: ["Vue", "Javascript", "HTML", "CSS"],
        areas: ["frontend"],
      },
      {
        id: 2,
        firstName: "Timothy",
        lastName: "White",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit.",
        rate: 15,
        technologies: ["C#", ".NET"],
        areas: ["backend"],
      },
      {
        id: 3,
        firstName: "Lucas",
        lastName: "Lobato",
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin ex id neque rhoncus, vel varius augue cursus. Fusce quis tellus ut erat lacinia suscipit. Phasellus dignissim ligula feugiat interdum rhoncus. Phasellus lacinia, ligula vitae feugiat dapibus, tortor nunc placerat risus, id blandit tortor lacus id eros. Maecenas blandit, quam quis pretium ornare, sem mauris interdum urna, ut laoreet dolor elit elementum leo. Duis malesuada dignissim dui, sit amet bibendum lectus fringilla quis. Donec leo velit, fringilla ac tellus tempus, iaculis aliquam leo. Sed vel augue dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Cras est enim, ultricies eu mi in, vulputate pretium tortor. Phasellus placerat lacus odio, et rutrum justo mattis non. Donec a gravida elit. Duis finibus congue auctor. Cras leo felis, finibus sit amet fringilla nec, ullamcorper eu orci. Cras faucibus finibus massa, vitae lacinia est placerat quis. Quisque pulvinar lacus eu dui fringilla, sed rutrum nisl posuere. Proin nec lectus placerat, consequat tortor vitae, placerat diam. Donec sagittis enim vitae sem faucibus, nec fringilla dui interdum. Donec libero mauris, tempor eu nisl eget, semper sollicitudin tortor. Aliquam pulvinar, erat sed sodales lobortis, sapien dui faucibus ligula, at vulputate odio nibh nec quam. Integer dignissim accumsan porttitor. Nam sit amet ante nunc. Sed luctus est sapien, aliquet porttitor risus viverra eu. Mauris justo risus, porttitor eget justo ut, laoreet tincidunt metus. Praesent sed dictum erat. Proin feugiat libero et nibh maximus venenatis. Maecenas tempor, ipsum quis bibendum posuere, nisi eros ultrices quam, sit amet semper nibh ipsum sit amet diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer eu mauris sagittis, lacinia neque vitae, imperdiet nisi.`,
        rate: 25,
        technologies: ["Vue", "Javascript", "HTML", "CSS", "C#", ".NET"],
        areas: ["backend", "frontend"],
      },
      {
        id: 4,
        firstName: "Tomas",
        lastName: "Aguirre",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit.",
        rate: 25,
        technologies: ["Javascript", "HTML", "CSS", "C#", ".NET", "Python"],
        areas: ["backend"],
      },
    ],
  },
  getters: mentorGetters,
  mutations: mentorsMutations,
  actions: mentorsActions,
};

export default mentorModule;
