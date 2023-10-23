import React, { useEffect, useMemo } from 'react'

import styles from './InfoOfOrder.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_MODAL_WINDOW } from '../../../services/actions/orderedIngredientsAction'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalInfoOfOrder from '../../OrderDetails/OrderDetails';
import { sendOrder } from '../../../services/actions/orderedIngredientsAction';
import { authUser } from '../../../services/actions/AuthAction';
import { useNavigate } from 'react-router-dom';

export default function InfoOfOrder() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const bun = useSelector(state => state.constructorReducer.bun);
    const main = useSelector(state => state.constructorReducer.main);

    let userLogined = null

    useEffect(() => {
        userLogined = sessionStorage.getItem('logined')
    }, [])

    const openPopup = () => {
       if (userLogined) {
        dispatch({ type: OPEN_MODAL_WINDOW });
        dispatch(sendOrder([bun, ...main]));
       } else {
        navigate('/login')
       }
    }

    const totalPrice = main.reduce((acc, { price }) => acc + price, 0) + bun.price * 2 || main.reduce((acc, { price }) => acc + price, 0)


    return (
        <div className={styles.container}>
            <h2 className={styles.total}>{totalPrice}<CurrencyIcon /></h2>
            <Button size='large' type='primary' htmlType='button' onClick={openPopup}>Оформить заказ</Button>
        </div>
    )
}