import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { closeInfoModalWindow } from '../../services/actions/currentIngredientsToModalAction';
import { useDispatch, useSelector } from 'react-redux';
import { closeOrderedModal } from '../../services/actions/orderedIngredientsAction';
import { IngredientDetails } from '../app/BurgerIngredients/ModalInfoIngredients/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';

const modalRoot = document.getElementById("modalRoot");

export const Modal = ({ modalType, handleClose, children }) => {
    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch(handleClose())
    }

    function closePopupByKey(evt) {
        if (evt.key === 'Escape') {
            dispatch(handleClose)

        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closePopupByKey)

        return (
            document.removeEventListener('keydown', closePopupByKey)
        )
    })


    if (modalType) {
        return ReactDOM.createPortal(
            <div className={styles.overlay}
                onClick={closePopup}>
                <ModalOverlay closePopup={closePopup}>
                    {children}
                </ModalOverlay>
            </div>,
            modalRoot
        )
    } else { return null }

}