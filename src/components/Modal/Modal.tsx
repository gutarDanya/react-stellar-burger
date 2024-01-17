import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById("modalRoot")!;

export const Modal: React.FC<IProps> = ({ children, title, handleClose }) => {

    function closePopupByKey(evt: KeyboardEvent) {
        if (evt.key === 'Escape') {
            handleClose()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closePopupByKey)

        return () => {
            document.removeEventListener('keydown', closePopupByKey)
        }
    }, [])


    return ReactDOM.createPortal(
        <ModalOverlay
            closePopup={handleClose}>
            <div className={styles.popup}
                onClick={e => e.stopPropagation()}>
                <div className={styles.container}>
                    <h2 className={styles.text}>{title}</h2>
                    <div data-testid='closeModal'>
                        <CloseIcon
                            data-testid='closeModal'
                            onClick={handleClose}
                            type='primary' />
                    </div>
                </div>
                {children}
            </div>
        </ModalOverlay>,
        modalRoot as HTMLDivElement
    )

}

interface IProps {
    title?: string;
    handleClose: any
}