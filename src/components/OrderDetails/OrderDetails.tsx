import React, {useEffect} from 'react';

import styles from './OrderDetails.module.css'
import done from '../../images/done.png'
import { useAppDispatch, useAppSelector } from '../../services/hooks/reduxHooks';


function OrderDetails() {

    const dispatch = useAppDispatch();

    const order = useAppSelector(state => state.orderedIngredientsReducer.order);

    useEffect(() => {
        console.log(order)
    }, [order])

    return (
        <div className={styles.popup}>
            <h2 className='text text_type_digits-large'>{
                order.success === true
                    ? order.order.number
                    : ""
            }</h2>
            <p className={styles.title}>идентификатор заказа</p>
            <img src={done} alt='картинка'
                className={styles.picture} />
            <p className={styles.wait}>Ваш заказ начали готовить</p>
            <p className={styles.bluredText}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;