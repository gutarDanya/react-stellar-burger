import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { useDispatch } from 'react-redux';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import { useLocation, useNavigate } from 'react-router-dom';

const modalRoot = document.getElementById("modalRoot");

export const Modal = ({ handleClose, children, title }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const location = useLocation();

    console.log(location.state.modal)

    const closePopup = () => {
        dispatch(handleClose())
        if (location.state.modal === 'ingredient') {
            navigate(-1)
        }
    }

    function closePopupByKey(evt) {
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
            <ModalOverlay closePopup={closePopup}>
                <div className={styles.popup}
                onClick={e => e.stopPropagation()}>
                    <div className={styles.container}>
                        <h2 className={styles.text}>{title}</h2>
                        <CloseIcon
                            onClick={closePopup} />
                    </div>
                    {children}
                </div>
            </ModalOverlay>,
            modalRoot
        )

}

Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}