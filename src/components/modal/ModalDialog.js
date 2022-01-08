import React from 'react'
import PropTypes from 'prop-types'

const ModalDialog = ({ show, toggleShow }) => {
  if (!show) return null

  return (
    <section className="modal modal--options" onClick={toggleShow}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="modal__dialog">
          <header className="modal__header mb-4">
            <h2 className="modal__title ta--left">Timer setting</h2>
            <i
              className="btn modal__close fas fa-times"
              onClick={toggleShow}
            ></i>
          </header>
          <section className="modal__content">
            <form className="form options__time">
              <div className="input-group">
                <label className="label" htmlFor="options-work">
                  Work
                </label>
                <input className="input" type="number" />
              </div>

              <div className="input-group">
                <label className="label" htmlFor="options-break">
                  Short Break
                </label>
                <input className="input" type="number" />
              </div>

              <div className="input-group">
                <label className="label" htmlFor="options-long-break">
                  Long Break
                </label>
                <input className="input" type="number" />
              </div>
            </form>

            <p className="options__choose mt-4">
              You can also choose one of the following options:
            </p>
            <div className="options__presets">
              <div className="options__preset" data-preset="popular">
                <p className="options__preset__name">Popular</p>
                <p className="options__preset__times">
                  25 min &bull; 5 min &bull; 15 min
                </p>
              </div>
              <div className="options__preset" data-preset="medium">
                <p className="options__preset__name">Medium</p>
                <p className="options__preset__times">
                  45 min &bull; 10 min &bull; 30 min
                </p>
              </div>
              <div className="options__preset" data-preset="extended">
                <p className="options__preset__name">Extended</p>
                <p className="options__preset__times">
                  90 min &bull; 20 min &bull; 60 min
                </p>
              </div>
            </div>
          </section>
          <footer className="modal__footer mt-5">
            <button className="btn btn--primary modal__ok" onClick={toggleShow}>
              Ok
            </button>
          </footer>
        </div>
      </div>
    </section>
  )
}

ModalDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
}

export default ModalDialog
