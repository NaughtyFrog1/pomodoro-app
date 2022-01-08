import React from 'react'
import PropTypes from 'prop-types'

const PomodoroButton = ({ icon }) => {
  return (
    <button className="btn pomodoro__btn">
      <i className={icon}></i>
    </button>
  )
}

PomodoroButton.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default PomodoroButton
