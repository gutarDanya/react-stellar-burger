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

export const Modal: React.FC<IProps> = ({ children, title }) => {

    const navigate = useNavigate();

    const location = useLocation();

    const closePopup = (): void => {
        navigate(-1)
    }

    function closePopupByKey(evt: any) {
        if (evt.key === 'Escape') {
            closePopup()
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
            closePopup={closePopup}>
            <div className={styles.popup}
                onClick={e => e.stopPropagation()}>
                <div className={styles.container}>
                    <h2 className={styles.text}>{title}</h2>
                    <div data-testid='closeModal'>
                        <CloseIcon
                            data-testid='closeModal'
                            onClick={closePopup}
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
}