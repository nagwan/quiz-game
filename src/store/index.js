import { createStore } from "vuex";

export default createStore({
  state: {
    uiState: "start",
    charactersOptions: ["baker", "mechanic", "artist"],
    selectedCharacter: "",
    questionIndex: 0,
    score: 0,
    questions: [
      {
        question: "What's your dog's name?",
        baker: "Woofgang Puck",
        mechanic: "Alf",
        artist: "Salvador Dogi",
      },
      {
        question: "What's your favorite hobby?",
        baker: "Extreme ironing",
        mechanic: "Bacon santa cosplay",
        artist: "Mimosas",
      },
      {
        question: "What's your favorite color?",
        baker: "turquoise",
        mechanic: "yellow",
        artist: "transparent",
      },
      {
        question: "Is cereal soup?",
        baker: "You can't be serieal",
        mechanic: "Yes, I am Jason Lengstorf",
        artist: "wut",
      },
      {
        question: "What’s the most imaginative insult you can come up with?",
        baker: "You're a substitute teacher with no lesson plan",
        mechanic: "Yer face is a melted welly",
        artist: "You eat buttons off the remote",
      },
      {
        question: "If peanut butter wasn’t called peanut butter, what would it be called?",
        baker: "legoome",
        mechanic: "brown paste",
        artist: "groundnut smoosh",
      },
    ],
  },
  mutations: {
    SET_SELECTED_CHARACTER: (state, value) => {
      state.selectedCharacter = value
    },

    SET_UI_STATE: (state, value) => {
      state.uiState = value
    },

    SET_QUESTION_INDEX: (state, value) => {
      state.questionIndex = value
    },

    SET_SCORE: (state, value) => {
      state.score = value
    },
  },
  actions: {
    setSelectedCharacter({ commit }, value) {
      commit("SET_SELECTED_CHARACTER", value)
    },

    setUIState({ commit }, value) {
      commit("SET_UI_STATE", value)
    },

    checkAnswer({ dispatch, state }, value) {
      if (state.questionIndex < state.questions.length - 1) {
        const score = value === state.selectedCharacter ? state.score += 15 : state.score -= 15
        dispatch("setScore", score)
        dispatch("setQuestionIndex", state.questionIndex + 1)
      } else {
        const UIState = Math.sign(state.score) > 0 ? "won" : "lost"
        dispatch("setUIState", UIState)
      }
    },

    setQuestionIndex({ commit }, value) {
      commit("SET_QUESTION_INDEX", value)
    },

    setScore({ commit }, value) {
      commit("SET_SCORE", value)
    },

    restart({ commit }) {
      commit("SET_SELECTED_CHARACTER", "")
      commit("SET_UI_STATE", "start")
      commit("SET_QUESTION_INDEX", 0)
      commit("SET_SCORE", 0)
    },
  },
  modules: {
  },
});
