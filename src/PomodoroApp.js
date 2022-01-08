import React from 'react'
import Modal from './components/modal/Modal'
import PomodoroContainer from './components/PomodoroContainer'
import { GlobalProvider } from './context/GlobalState'

const PomodoroApp = () => {
  return (
    <GlobalProvider>
      <PomodoroContainer />
      <Modal />
    </GlobalProvider>
  )
}

export default PomodoroApp
