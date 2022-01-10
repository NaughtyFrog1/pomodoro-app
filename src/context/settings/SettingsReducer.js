const SettingsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POMODORO_TIME':
      return {
        ...state,
        pomodoroTime: action.payload,
      }
    case 'SET_SHORT_BREAK_TIME':
      return {
        ...state,
        shortBreakTime: action.payload,
      }
    case 'SET_LONG_BREAK_TIME':
      return {
        ...state,
        longBreakTime: action.payload,
      }
    case 'SET_AUTO_START_POMODOROS':
      return {
        ...state,
        autoStartPomodoros: action.payload,
      }
    case 'SET_AUTO_START_BREAKS':
      return {
        ...state,
        autoStartBreaks: action.payload,
      }
    case 'SET_INTERVALS':
      return {
        ...state,
        intervals: action.payload,
      }
    default:
      return state
  }
}

export default SettingsReducer
