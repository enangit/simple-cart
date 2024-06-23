import { useEffect, useRef } from "react"

const Modal = ({ children, open, }) => {
    const dialog = useRef(null);

    useEffect(() => {
        const modal = dialog.current;
        if (open) {
            modal.showModal();
        }

        return () => {
            modal.close();
        }
    }, [open]);

    return (
        <dialog ref={dialog} >
            {children}
        </dialog>
    )
}


export default Modal
