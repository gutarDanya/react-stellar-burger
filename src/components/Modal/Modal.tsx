import React, { useEffect, KeyboardEvent, SyntheticEvent, ChangeEvent } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { useDispatch } from 'react-redux';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/hooks/reduxHooks';

const modalRoot: any = document.getElementById("modalRoot");

export const Modal: React.FC<IProps> = ({ children, title, handleClose }) => {

    const navigate = useNavigate();

    const location = useLocation();



    function closePopupByKey(evt: any) {
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