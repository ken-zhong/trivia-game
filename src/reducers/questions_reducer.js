import { RECEIVE_NEW_QUESTIONS } from '../actions/trivia_actions'

const defaultState = {questions: []}

const QuestionsReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let newState = []
  switch (action.type) {
    case RECEIVE_NEW_QUESTIONS:
      newState = action.questions
      return Object.assign({}, state, newState)
    default: return state
  }
}

export default QuestionsReducer
