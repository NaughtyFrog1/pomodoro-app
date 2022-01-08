import React, { createContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'

const init = (initialState) =>
  JSON.parse(localStorage.getItem('pomodoro-app')) || initialState

const initialState = {
  settings: {
    pomodoroTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    autoStartPomodoros: false,
    autoStartBreaks: false,
    intervals: 4,
  },
  timerState: {
    currentTime: 25 * 60,
    isRunning: false,
    isBreakTime: false,
    currentInterval: 1,
  },
}

const GlobalContext = createContext(initialState)

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('pomodoro-app', JSON.stringify(state))
  }, [state])

  return (
    <GlobalContext.Provider
      value={{
        settings: state.settings,
        timerState: state.timerState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
