import React, { useEffect } from 'react';
import styles from './Feed.module.css';
import { Order } from './Order/Order';
import { OrederNumbers } from './OrdersNumbers/OrderNumbers';
import { useAppDispatch, useAppSelector } from '../../services/hooks/reduxHooks';
import { WS_CLOSE, WS_CONNECTING } from '../../services/actions/WSAction';
import { wsUrl } from '../../utils/constants';
import { v4 as uuid4 } from 'uuid'

export const Feed = () => {

    const dispatch = useAppDispatch()

    const orders = useAppSelector(store => store.WSReducer.orders);

    const readyOrders = orders.map((order: any) => {return order.status === 'done' ? order.number : null})
    const cookingOrders = orders.map((order: any) => {return order.status !== 'done' ? order.number : null})

    let total: string | number = useAppSelector((state) => state.WSReducer.total);
    let totalToday: number = useAppSelector((state) => state.WSReducer.totalToday);

    useEffect(() => {
        dispatch({ type: WS_CONNECTING, payload: `${wsUrl}/orders/all` })
        return () => {
            dispatch({type: WS_CLOSE})
        }
    }, [])

    return (
        <div className={styles.page}>
            <h1 className={`${styles.title} + text text_type_main-large`} >Лента заказов</h1>
            <div className={`${styles.main}`} >
                <div className={`${styles.orders} custom-scroll`}>
                    {orders && orders.length > 0 && orders.map((order: any, i: any) => {
                        console.log(order)
                        return (
                            <Order id={order._id} title={order.name} ingredients={order.ingredients} date={order.createdAt} numbers={order.number} from='feed' key={uuid4()}/>
                        )
                    })}
                </div>
                <div className={`${styles.readinessPanel}`}>
                    <div className={`${styles.info}`}>
                        <OrederNumbers type='ready' title='Готовы:' orders={readyOrders} />
                        <OrederNumbers type='noReady' title='В работе:' orders={cookingOrders} />
                    </div>
                    <p className={`${styles.text} text text_type_main-medium`}>Выполнено за все время:</p>
                    <p className={`${styles.numbers} text text_type_digits-large`}>{total}</p>
                    <p className={`${styles.text} text text_type_main-medium`}>Выполнено за сегодня:</p>
                    <p className={`${styles.numbers} text text_type_digits-large`}>{totalToday}</p>
                </div>
            </div>
        </div>
    )
}