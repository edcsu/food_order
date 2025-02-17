import { useEffect, useRef } from 'react'
import { createPortal} from 'react-dom'

function Modal({children, open, className = ''}) {
    const dialog = useRef()
    useEffect(() => {
      if (open) {
        dialog.current.showModal()
      }
    }, [open])
    
    return createPortal(
        <dialog
            className={`modal ${className}`}
        >
            {children}
        </dialog>,
        document.getElementById('modal')
    )
}

export default Modal