import React from 'react'
import PomodoroButton from './PomodoroButton'

const PomodoroButtons = () => {
  return (
    <div className='pomodoro__buttons mt-5'>
      <PomodoroButton icon='fas fa-redo-alt' />
      <PomodoroButton icon='fas fa-play' />
      <PomodoroButton icon='fas fa-fast-forward' />
    </div>
  )
}

export default PomodoroButtons
