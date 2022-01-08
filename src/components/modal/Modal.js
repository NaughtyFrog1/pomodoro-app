import React, { useState } from 'react'
import ModalButton from './ModalButton'
import ModalDialog from './ModalDialog'

const Modal = () => {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(!show)

  return (
    <>
      <ModalButton onClick={toggleShow} />
      <ModalDialog show={show} toggleShow={toggleShow} />
    </>
  )
}

export default Modal
