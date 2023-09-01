import React from 'react';

import styles from './ModalInfoOfOrder.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {CLOSE_MODAL_WINDOW} from '../../../services/actions/orderedIngredientsAction';
import done from '../../../../images/done.png'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';


function ModalInfoOfOrder () {

    const dispatch = useDispatch();

    const active = useSelector(state => state.orderedIngredientsReducer.modalOpened);

    const order = useSelector(state => state.orderedIngredientsReducer.order)

    function closePopupByKey (evt) {
        if (evt.key === 'Escape') {
            dispatch({type: CLOSE_MODAL_WINDOW})
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', closePopupByKey);

        return () => {
            document.removeEventListener('keydown', closePopupByKey)
        }
    }, [])

    const closePopup = () => {
        dispatch({type: CLOSE_MODAL_WINDOW})
    }

    return (
        <div className={active
        ? styles.modal
        : styles.modalHidden}
        onClick={closePopup}>
            <section className={styles.popup}
            onClick={e => e.stopPropagation()}>
                <div className={styles.mark}><CloseIcon onClick={closePopup}/></div>
                <h2 className='text text_type_digits-large'>{
                    order.success === true
                    ? order.order.number
                    : 1488
                }</h2>
                <p className={styles.title}>инетификатор заказа</p>
                <img src={done} alt='картинка' 
                className={styles.picture}/>
                <p className={styles.wait}>Ваш заказ начали готовить</p>
                <p className={styles.bluredText}>Дождитесь готовности на орбитальной станции</p>
            </section>
        </div>
    )
}

export default ModalInfoOfOrder;