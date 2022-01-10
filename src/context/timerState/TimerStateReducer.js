const TimerStateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.payload,
      }
    case 'SET_CURRENT_INTERVAL':
      return {
        ...state,
        currentInterval: action.payload,
      }
    case 'SET_IS_RUNNING':
      return {
        ...state,
        isRunning: action.payload,
      }
    case 'SET_IS_BREAK_TIME':
      return {
        ...state,
        isBreakTime: action.payload,
      }
    default:
      return state
  }
}

export default TimerStateReducer
