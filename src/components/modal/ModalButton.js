import React from 'react'
import PropTypes from 'prop-types'

const ModalButton = ({ onClick }) => {
  return (
    <button className="btn btn--options" onClick={onClick}>
      <i className="fas fa-cog"></i>
    </button>
  )
}

ModalButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ModalButton
