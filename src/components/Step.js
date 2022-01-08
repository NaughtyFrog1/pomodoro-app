import React from 'react'
import PropTypes from 'prop-types'

const Step = ({ step, name }) => {
  return (
    <div className="pomodoro__step">
      <input
        type="radio"
        name={name}
        value={step}
        id={`${name}-${step}`}
      />
      <label htmlFor={`${name}-${step}`}></label>
    </div>
  )
}

Step.propTypes = {
  step: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default Step
