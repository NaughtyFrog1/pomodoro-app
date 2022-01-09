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
    currentTime: null,
    isRunning: false,
    isBreakTime: false,
    currentInterval: 1,
  },
}
initialState.timerState.currentTime = initialState.settings.pomodoroTime * 60

const GlobalContext = createContext(initialState)

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('pomodoro-app', JSON.stringify(state))
  }, [state])

  const setPomodoroTime = (newTime) => {
    if (!state.timerState.isBreakTime) {
      const remainingTime =
        newTime -
        (state.settings.pomodoroTime * 60 - state.timerState.currentTime)

      dispatch({
        type: 'UPDATE_TIMER_STATE',
        payload: {
          key: 'currentTime',
          value: remainingTime,
        },
      })
    }

    dispatch({
      type: 'UPDATE_SETTINGS',
      payload: {
        key: 'pomodoroTime',
        value: newTime,
      },
    })
  }

  const setShortBreakTime = (newTime) => {
    if (state.timerState.isBreakTime) {
      const remainingTime =
        newTime -
        (state.settings.shortBreakTime * 60 - state.timerState.currentTime)

      dispatch({
        type: 'UPDATE_TIMER_STATE',
        payload: {
          key: 'currentTime',
          value: remainingTime,
        },
      })
    }

    dispatch({
      type: 'UPDATE_SETTINGS',
      payload: {
        key: 'shortBreakTime',
        value: newTime,
      },
    })
  }

  const setLongBreakTime = (newTime) => {
    if (
      state.timerState.isBreakTime &&
      state.timerState.currentInterval === state.settings.intervals
    ) {
      const remainingTime =
        newTime -
        (state.settings.longBreakTime * 60 - state.timerState.currentTime)

      dispatch({
        type: 'UPDATE_TIMER_STATE',
        payload: {
          key: 'currentTime',
          value: remainingTime,
        },
      })
    }

    dispatch({
      type: 'UPDATE_SETTINGS',
      payload: {
        key: 'longBreakTime',
        value: newTime,
      },
    })
  }

  const toggleAutoStartPomodoros = () => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      payload: {
        key: 'autoStartBreaks',
        value: !state.settings.autoStartBreaks,
      },
    })
  }

  const toggleAutoStartBreaks = () => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      payload: {
        key: 'autoStartPomodoros',
        value: !state.settings.autoStartPomodoros,
      },
    })
  }

  const setIntervals = (newIntervals) => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      payload: {
        key: 'intervals',
        value: newIntervals,
      },
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        settings: state.settings,
        timerState: state.timerState,
        setPomodoroTime,
        setShortBreakTime,
        setLongBreakTime,
        toggleAutoStartPomodoros,
        toggleAutoStartBreaks,
        setIntervals,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
