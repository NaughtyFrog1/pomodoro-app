import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import zeroFill from '../helpers/zeroFill'

const Timer = () => {
  const context = useContext(GlobalContext)

  return (
    <p className="pomodoro__timer mt-5 mb-2 ta--center fw--600">
      {Math.floor(context.timerState.currentTime / 60)}:
      {zeroFill(context.timerState.currentTime % 60)}
    </p>
  )
}

export default Timer
