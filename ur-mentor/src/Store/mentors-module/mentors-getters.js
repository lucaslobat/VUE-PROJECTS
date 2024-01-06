export default {
  getAllMentors(state) {
    return state.mentors;
  },
  hasMentors(state) {
    return state.mentors && state.mentors.length > 0;
  },
  getMentorById: (state) => (id) => {
    return state.mentors.find((mentor) => mentor.id == id);
  },
};
