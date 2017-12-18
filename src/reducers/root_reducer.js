import { combineReducers } from 'redux'
import UiReducer from './ui_reducer'
import GameReducer from './game_reducer'

export default combineReducers({
  game: GameReducer,
  ui: UiReducer
})
