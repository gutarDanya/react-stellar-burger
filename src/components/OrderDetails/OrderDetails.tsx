import React, {useEffect} from 'react';

import styles from './OrderDetails.module.css'
import { useDispatch, useSelector } from 'react-redux';
import done from '../../images/done.png'
import { ingredientModalWindowOpened } from '../../services/actions/currentIngredientsToModalAction';
import { useAppDispatch, useAppSelector } from '../../services/hooks/reduxHooks';


function OrderDetails() {

    const dispatch = useAppDispatch();

    const order = useAppSelector(state => state.orderedIngredientsReducer.order);
    console.log(order)

    useEffect(() => {
        dispatch(ingredientModalWindowOpened())
    })

    return (
        <div className={styles.popup}>
            <h2 className='text text_type_digits-large'>{
                order.success === true
                    ? order.order.number
                    : 1488
            }</h2>
            <p className={styles.title}>инетификатор заказа</p>
            <img src={done} alt='картинка'
                className={styles.picture} />
            <p className={styles.wait}>Ваш заказ начали готовить</p>
            <p className={styles.bluredText}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;