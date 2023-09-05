import React, { useMemo } from 'react'

import styles from './InfoOfOrder.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_MODAL_WINDOW } from '../../../services/actions/orderedIngredientsAction'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalInfoOfOrder from '../../OrderDetails/OrderDetails';
import { sendOrder } from '../../../services/actions/orderedIngredientsAction';

export default function InfoOfOrder() {

    const bun = useSelector(state => state.constructorReducer.bun);
    const main = useSelector(state => state.constructorReducer.main);


    const openPopup = () => {
        dispatch({ type: OPEN_MODAL_WINDOW });
        dispatch(sendOrder([bun, ...main]));
    }

    const totalPrice = main.reduce((acc, { price }) => acc + price, 0) + bun.price * 2 || main.reduce((acc, { price }) => acc + price, 0)

    
    const dispatch = useDispatch();


    return (
        <div className={styles.container}>
            <h2 className={styles.total}>{totalPrice}<CurrencyIcon /></h2>
            <Button size='large' type='primary' htmlType='button' onClick={openPopup}>Оформить заказ</Button>
        </div>
    )
}