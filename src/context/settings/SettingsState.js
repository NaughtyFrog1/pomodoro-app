import { createContext, useEffect, useReducer } from 'react'
import SettingsReducer from './SettingsReducer'

const initialState = {
  pomodoroTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  autoStartPomodoros: false,
  autoStartBreaks: false,
  intervals: 4,
}

const init = (initialState) =>
  JSON.parse(localStorage.getItem('pomodoro-settings')) || initialState

const SettingsContext = createContext(initialState)

const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SettingsReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('pomodoro-settings', JSON.stringify(state))
  }, [state])

  const setPomodoroTime = (payload) => {
    dispatch({ type: 'SET_POMODORO_TIME', payload })
  }

  const setShortBreakTime = (payload) => {
    dispatch({ type: 'SET_SHORT_BREAK_TIME', payload })
  }

  const setLongBreakTime = (payload) => {
    dispatch({ type: 'SET_LONG_BREAK_TIME', payload })
  }

  const setAutoStartPomodoros = (payload) => {
    dispatch({ type: 'SET_AUTO_START_POMODOROS', payload })
  }

  const setAutoStartBreaks = (payload) => {
    dispatch({ type: 'SET_AUTO_START_BREAKS', payload })
  }

  const setIntervals = (payload) => {
    dispatch({ type: 'SET_INTERVALS', payload })
  }

  return (
    <SettingsContext.Provider
      value={{
        state,
        setPomodoroTime,
        setShortBreakTime,
        setLongBreakTime,
        setAutoStartPomodoros,
        setAutoStartBreaks,
        setIntervals,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export { SettingsContext, SettingsProvider }
