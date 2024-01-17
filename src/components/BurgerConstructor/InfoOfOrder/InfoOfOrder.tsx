import React, { useState } from 'react'

import styles from './InfoOfOrder.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { sendOrder } from '../../../services/actions/orderedIngredientsAction';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/reduxHooks';
import { refreshToken } from '../../../services/actions/AuthAction';
import { getCookie } from '../../../utils/auth';
import { Modal } from '../../Modal/Modal';
import OrderDetails from '../../OrderDetails/OrderDetails';

export default function InfoOfOrder() {

    const [modalopend, setModal] = useState(false);

    const closePopup = () => {
        setModal(false)
    }

   const userLogined = getCookie('accessToken')

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const bun = useAppSelector(state => state.constructorReducer.bun)
    const main = useAppSelector(state => state.constructorReducer.main)


    const openPopup = () => {
       if (bun) {
        if ( userLogined ) {
            dispatch(sendOrder([bun, bun, ...main]));
            setModal(true)
        } else {
            navigate('/login')
        }
       }
    }

    let totalPrice = main.reduce((acc, { price }) => acc + price, 0);
    
    if (bun) {
        totalPrice = totalPrice + bun.price * 2
    }


    return (
        <div className={styles.container}>
            <h2 className={styles.total}>{totalPrice || 0}<CurrencyIcon type='primary' /></h2>
            <Button size='large' type='primary' htmlType='button' onClick={openPopup}>Оформить заказ</Button>

            {modalopend && (<Modal title='' handleClose={closePopup}>
            <OrderDetails />
          </Modal>)}
        </div>
    )
}