import { START_GAME } from '../actions/ui_actions'
// NOTE: replace Object.assign if I need a deep dup later

const defaultState = {
  showTitleScreen: true
}

const UiReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let newState = {}
  switch (action.type) {
    case START_GAME:
      newState = {showTitleScreen: false}
      return Object.assign({}, state, newState)
    default: return state
  }
}

export default UiReducer
