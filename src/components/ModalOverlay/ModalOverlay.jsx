import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './ModalOverlay.module.css';
import { Modal } from '../Modal/Modal';
import { closeInfoModalWindow } from '../services/actions/currentIngredientsToModalAction';
import { useDispatch, useSelector } from 'react-redux';
import { closeOrderedModal } from '../services/actions/orderedIngredientsAction';
import { IngredientDetails } from '../app/BurgerIngredients/ModalInfoIngredients/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';

const modalRoot = document.getElementById("modalRoot")

export const ModalOverlay = ({ modalType }) => {
    const dispatch = useDispatch();

    const ingredientModalOpened = useSelector(state => state.currentIngredientReducer.modalWindowOpened);
    const orderedIngredientModalOpened = useSelector(state => state.orderedIngredientsReducer.modalOpened)

    const closePopupInfoModal = () => {
        dispatch(closeInfoModalWindow());
    }

    const closePopupOrderModal = () => {
        dispatch(closeOrderedModal())
    }

    function closePopupByKey(evt) {
        if (evt.key === 'Escape') {
            dispatch(closeInfoModalWindow())
            dispatch(closeOrderedModal())
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closePopupByKey)

        return(
            document.addEventListener('keydown', closePopupByKey)
        )
    })

    const active = useSelector(state => state.currentIngredientReducer.modalWindowOpened);

    if (ingredientModalOpened || orderedIngredientModalOpened) {
        return ReactDOM.createPortal(
            <div className={styles.overlay}>
                {ingredientModalOpened

                    ? <Modal closePopup={closePopupInfoModal} title='Детали Ингредиента'>
                        <IngredientDetails />
                    </Modal>

                    : <Modal closePopup={closePopupOrderModal} title=''>
                        <OrderDetails />
                    </Modal>}
            </div>,
            modalRoot
        )
    } else { return null }

}