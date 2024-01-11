import React, { useEffect } from "react";
import styles from './HistoryOrderDetails.module.css'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hooks/reduxHooks";
import { GET_CURRENT_ORDER, WS_CLOSE, WS_CONNECTING } from "../../services/actions/WSAction";
import {  WS_CONNECTING as WS_HISTORY_CONNECTING, WS_CLOSE as WS_HISTORY_CLOSE } from "../../services/actions/WSHistoryAction";
import { v4 as uuid4 } from 'uuid'
import { wsUrl } from "../../utils/constants";
import { getCookie } from "../../utils/auth";
import { getData } from "../../services/actions/apiAction";


export const HistoryOrderDetails = () => {

    const { id } = useParams();
    const dispatch = useAppDispatch();

    const from = useLocation().pathname;

    const allIngredients = useAppSelector(state => state.apiReducer.ingredientData);
    const historyOrders = useAppSelector(store => store.WSHistroyReducer.orders);
    const feedOrders = useAppSelector(store => store.WSReducer.orders);

    const orders = from.includes('feed') ? feedOrders : historyOrders;


    const currentOrder = orders.find((order: any) => {
        return order._id === id
    });


    const numbers = currentOrder && currentOrder.number;
    const title = currentOrder && currentOrder.name;
    const status = currentOrder && currentOrder.status === 'done' ? 'готов' : 'готовится';
    const date = currentOrder && currentOrder.createdAt;
    const ingredients: any = currentOrder && currentOrder.ingredients;

    const notSortedIngredientsInOrder = ingredients && ingredients.map((ingredient: string, i: number) => {
        return allIngredients.some((ing) => { return ing._id === ingredient })
            ? allIngredients.find((ing) => ing._id === ingredient)
            : null
    });

    const ingredientsInOrder = Array.from(new Set(notSortedIngredientsInOrder))

    const totalPrice = ingredientsInOrder && ingredientsInOrder.reduce((acc: any, item: any) => {

        return item.type === 'bun'
            ? acc + item.price * 2
            : acc + item.price
    }, 0) 

    ingredientsInOrder.forEach((ing: any) => {
        let sum = 0;
        notSortedIngredientsInOrder.forEach((allIng: any) => {
            if (ing._id === allIng._id) {
                sum = sum + 1
            }
            ing.sum = sum
        })
    })

    useEffect(() => {
        getData()
    },[])
    
    useEffect(() => {
        if (from.includes('feed')) {
            dispatch({type: WS_CONNECTING, payload: `${wsUrl}/orders/all`});
        } else {
            dispatch({type: WS_HISTORY_CONNECTING, payload: `${wsUrl}/orders?token=${getCookie('accessToken')}`});
        }
        return () => {
            dispatch({type: WS_CLOSE})
            dispatch({type: WS_HISTORY_CLOSE})
        }
    }, []);

    return (
        <div className={`${styles.container}`}>
            <p className={`${styles.numbers} text text_type_digits-default`} >#{numbers}</p>
            <h2 className={`${styles.title}text text_type_main-medium`}>{title}</h2>
            <p className={`${status === 'готов' ? styles.statusGreen : styles.status} text text_type_main-default`}>{status}</p>
            <p className={`${styles.text} text text_type_main-medium`}>Состав:</p>
            <div className={`${styles.ingredients} custom-scroll`}>
                {ingredientsInOrder && ingredientsInOrder.length > 0 && ingredientsInOrder.map((ingredient: any, key: number) => {
                    return (
                        <div className={styles.ingredient} key={uuid4()}>
                            <img src={ingredient.image} className={styles.image} />
                            <p className={`${styles.name} text text_type_main-default`}>{ingredient.name}</p>
                            <div className={styles.ingredientPrice}>
                                <p className={`${styles.price} text text_type_digits-default`}>{ingredient.sum} X {ingredient.price}</p>
                                <CurrencyIcon type='primary' />
                            </div>
                        </div>
                    )
                })}
            </div>
            <footer className={`${styles.footer}`}>
                <p className={`${styles.date} text text_type_main-default text_color_inactive`}>{date}</p>
                <div className={`${styles.priceContainer}`}>
                    <p className={`${styles.totalPrice} text text_type_digits-default`}>{totalPrice}</p>
                    <CurrencyIcon type='primary' />
                </div>
            </footer>
        </div>
    )
}