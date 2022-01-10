import { createContext, useEffect, useReducer } from 'react'
import TimerStateReducer from './TimerStateReducer'

const initialState = {
  currentTime: null,
  currentInterval: 1,
  isRunning: false,
  isBreakTime: false,
}

const init = (initialState) =>
  JSON.parse(sessionStorage.getItem('pomodoro-timer-state')) || initialState

const TimerStateContext = createContext(initialState)

const TimerStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TimerStateReducer, initialState, init)

  useEffect(() => {
    sessionStorage.setItem('pomodoro-timer-state', JSON.stringify(state))
  }, [state])

  const setCurrentTime = (payload) => {
    dispatch({ action: 'SET_CURRENT_TIME', payload })
  }

  const setCurrentInterval = (payload) => {
    dispatch({ action: 'SET_CURRENT_INTERVAL', payload })
  }

  const setIsRunning = (payload) => {
    dispatch({ action: 'SET_IS_RUNNING', payload })
  }

  const setIsBreakTime = (payload) => {
    dispatch({ action: 'SET_IS_BREAK_TIME', payload })
  }

  return (
    <TimerStateContext.Provider
      value={{
        state,
        setCurrentTime,
        setCurrentInterval,
        setIsRunning,
        setIsBreakTime,
      }}
    >
      {children}
    </TimerStateContext.Provider>
  )
}

export { TimerStateContext, TimerStateProvider }
