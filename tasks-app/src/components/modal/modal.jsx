import './modal.css'

const Modal = ({children,visible}) => {
  return (
    visible && <div className='modal'>
        <div className='modal-dialog'>{children}</div>
    </div>
  )
}

export default Modal