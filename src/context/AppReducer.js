const AppReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.payload.key]: action.payload.value,
        },
      }
    case 'UPDATE_TIMER_STATE':
      return {
        ...state,
        timerState: {
          ...state.timerState,
          [action.payload.key]: action.payload.value,
        },
      }
    default:
      return state
  }
}

export default AppReducer
