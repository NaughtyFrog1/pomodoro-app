import React from 'react'
import PropTypes from 'prop-types'
import Step from './Step'

const Steps = ({ numberOfSteps }) => {
  return (
    <div className="pomodoro__steps">
      {[...Array(numberOfSteps)].map((value, i) => (
        <Step step={i} name="step" key={`step-${i}`} />
      ))}
    </div>
  )
}

Steps.propTypes = {
  numberOfSteps: PropTypes.number.isRequired,
}

export default Steps
