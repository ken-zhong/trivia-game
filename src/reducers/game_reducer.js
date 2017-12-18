import { combineReducers } from 'redux'
import QuestionsReducer from './questions_reducer'

const GameReducer = combineReducers({
  questions: QuestionsReducer
})

export default GameReducer
