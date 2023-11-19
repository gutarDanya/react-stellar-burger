import React, { useEffect } from "react";
import styles from './Routing.module.css';
import { Ingredient } from "../../app/BurgerIngredients/IngredientList/Ingredient/Ingredient";
import { RouterOrderIngredient } from "./RouterOrderIngredient/RouterOrderIngredient";
import { useLocation, useParams } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../../../services/hooks/reduxHooks";

const RoutingOrder = () => {

    const { id } = useParams();

    console.log(useParams())

    const { from } = useLocation().state

    console.log(from)

    const allIngredients = useAppSelector(state => state.apiReducer.ingredientData);
    const historyOrders = useAppSelector(store => store.WSHistroyReducer.orders);
    const feedOrders = useAppSelector(store => store.WSReducer.orders);

    const orders = from === 'feed' ? feedOrders : historyOrders;

    const currentOrder = orders.find((order: any) => {
        return order._id === id
    });

    let numbers: string | number = currentOrder.number;
    let title: string = currentOrder.name;
    let status: string = currentOrder.status === 'done' ? 'готов' : 'готовится';
    let date: string = currentOrder.createdAt;
    let ingredients: any = currentOrder.ingredients

    console.log(currentOrder, feedOrders)

    useEffect(() => {
         numbers = currentOrder.number;
         title = currentOrder.name;
         status = currentOrder.status === 'done' ? 'готов' : 'готовится';
         date = currentOrder.createdAt;
        ingredients = currentOrder.ingredients
    }, [orders])

    const ingredientsInOrder = ingredients && ingredients.map((ingredient: string, i: number) => {
        return allIngredients.some((ing) => { return ing._id === ingredient })
            ? allIngredients.find((ing) => ing._id === ingredient)
            : null
    });

    const totalPrice = ingredientsInOrder.reduce((acc: any, item: any) => {
        
        return item.type === 'bun'
        ? acc + item.price * 2
        : acc + item.price
    }, 0)

    return (
        <div className={`${styles.page}`}>
            <div className={`${styles.container}`}>
                <p className={`${styles.order} text text_type_digits-default`}>#{numbers}</p>
                <h2 className={`${styles.title} text text_type_main-medium`}>{title}</h2>
                <p className={`${status === 'готов' ? styles.statusGreen : styles.status} text text_type_main-small`}>{status}</p>
                <p className={`${styles.subTitle} text text_type_main-medium`}>Состав:</p>
                <div className={`${styles.ingredients} custom-scroll`}>
                    {ingredientsInOrder && ingredientsInOrder.length > 0 && ingredientsInOrder.map((ingredient: any) => {
                        return (
                            <RouterOrderIngredient image={ingredient.image} name={ingredient.name} price={ingredient.price} />
                        )
                    })}
                </div>
                <div className={styles.footer}>
                    <p className={`${styles.date} text text_type_main-default text_color_inactive`} >{date}</p>
                    <p className={`${styles.totalPrice} text text_type_digits-default`}>{totalPrice}<CurrencyIcon type="primary" /></p>
                </div>
            </div>
        </div>
    )
}

export default RoutingOrder