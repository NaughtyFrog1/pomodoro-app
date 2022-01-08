import React from 'react'
import PomodoroButtons from './PomodoroButtons'
import Steps from './Steps'
import Timer from './Timer'

const PomodoroContainer = () => {
  return (
    <main className="pomodoro container container--md">
      <div>
        <Timer />
        <Steps />
        <PomodoroButtons />
      </div>
    </main>
  )
}

export default PomodoroContainer
