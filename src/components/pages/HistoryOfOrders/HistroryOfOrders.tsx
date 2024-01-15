import React, { useEffect } from "react";
import styles from './HistoryOfOrders.module.css';
import { useAppDispatch, useAppSelector } from "../../../services/hooks/reduxHooks";
import { WS_CLOSE, WS_CONNECTING, WS_DISCONNECT } from "../../../services/actions/WSHistoryAction";
import { wsUrl } from "../../../utils/constants";
import { getCookie } from "../../../utils/auth";
import { Order } from "../../Feed/Order/Order";

const HistoryOfOrders = () => {

    const dispatch = useAppDispatch();

    const orders = useAppSelector(store => store.WSHistroyReducer.orders)

    useEffect(() => {
        dispatch({type: WS_CONNECTING, payload: `${wsUrl}/orders?token=${getCookie('accessToken')}`})
        return () => {
            dispatch({type: WS_CLOSE})
        }
    }, [])

    return (
        <div className={`${styles.container} custom-scroll`}>
            {orders && orders.length > 0 && orders.map((order: any) => {
                return (
                    <Order id={order._id} title={order.name} ingredients={order.ingredients} date={order.updatedAt} key={order._id} numbers={order.number} from='user-history'/>
                )
            } )}
        </div>
    )
}

export default HistoryOfOrders;