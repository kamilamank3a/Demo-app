import initialState from '../initialState'
import {factorial} from '../helpers.js'

export default function reducer(state = initialState.factorial, action) {
  switch(action.type) {
    case "FACT/INPUT_CHANGED":
      return {
        ...state,
        factInput: action.value,
      }
    case "FACT/SUBMIT":
      return {
        ...state,
        factOutput: (factorial(state.factInput)),
      }
    case "FACT/CLEAR":
      return {
        ...state,
        factOutput: '',
      }
    case "FACT/LOG_ITEM":
      var newLog = state.log.slice();
      newLog.push([
        action.input,
        action.output,
      ]);
      return {
        ...state,
        log: newLog,
      }
    case "FACT/CLEAR_HISTORY":
      return {
        ...state,
        log: [],
      }
    default:
      return state
  }
}
