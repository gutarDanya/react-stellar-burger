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
import { constructorReducer } from '../../../services/reducers/ingredientsConstructorReducer';

export default function InfoOfOrder() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const bun = useSelector((state: TSelector) => state.constructorReducer.bun);
    const main = useSelector((state: TSelector) => state.constructorReducer.main);
    const userLogined = sessionStorage.getItem('logined')


    const openPopup = () => {
       if (userLogined && bun) {
        dispatch({ type: OPEN_MODAL_WINDOW });
        dispatch(sendOrder([bun, ...main]));
       } else {
        navigate('/login')
       }
    }

    let totalPrice = main.reduce((acc, { price }) => acc + price, 0);
    
    if (bun) {
        totalPrice = totalPrice + bun.price * 2
    }


    return (
        <div className={styles.container}>
            <h2 className={styles.total}>{totalPrice}<CurrencyIcon type='primary' /></h2>
            <Button size='large' type='primary' htmlType='button' onClick={openPopup}>Оформить заказ</Button>
        </div>
    )
}

interface IIngredient {
    _id: string;
    name: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile?: string;
    image_large?: string;
    __v: number;
}

interface IBun extends IIngredient {
    type: 'bun';
}

interface IMain extends IIngredient {
    type: 'main';
}

interface IReducer {
    bun?: IBun;
    main: Array<IMain>
}

type TSelector = {
    constructorReducer: IReducer
}