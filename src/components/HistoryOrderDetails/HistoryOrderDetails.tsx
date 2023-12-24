import React, { useEffect } from "react";
import styles from './HistoryOrderDetails.module.css'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hooks/reduxHooks";
import { GET_CURRENT_ORDER } from "../../services/actions/WSAction";
import { v4 as uuid4 } from 'uuid'


export const HistoryOrderDetails = () => {

    const dispatch = useAppDispatch();

    const { id } = useParams();

    const currentOrder = useAppSelector(state => state.WSReducer.currentOrder);
    const allIngredients = useAppSelector(state => state.apiReducer.ingredientData)

    console.log(currentOrder)

    useEffect(() => {
        dispatch({ type: GET_CURRENT_ORDER, payload: id })
    }, []);

    const numbers: number = currentOrder.number || 1488;
    const title: string = currentOrder.name || '';
    const status: string = currentOrder.status === 'done' ? 'выполнен' : 'в работе' || '';
    const ingredientsInOrder = currentOrder.ingredients && currentOrder.ingredients.map((ingredient: string) => {
        return allIngredients.some((ing) => { return ing._id === ingredient })
            ? allIngredients.find((ing) => ing._id === ingredient)
            : null
    });
    const ingredients: any = Array.from(new Set(ingredientsInOrder));

    ingredients.forEach((ing: any) => {
        let sum = 0;
        ingredientsInOrder.forEach((allIng: any) => {
            if (ing._id === allIng._id) {
                sum = sum + 1
            }
            ing.sum = sum
        })
    })

    const when = currentOrder.createdAt;
    const price = ingredientsInOrder && ingredientsInOrder.reduce((acc: any, item: any) => {
        return acc + item.price
    }, 0);


    return (
        <div className={`${styles.container}`}>
            <p className={`${styles.numbers} text text_type_digits-default`} >#{numbers}</p>
            <h2 className={`${styles.title}text text_type_main-medium`}>{title}</h2>
            <p className={`${status === 'выполнен' ? styles.statusGreen : styles.status} text text_type_main-default`}>{status}</p>
            <p className={`${styles.text} text text_type_main-medium`}>Состав:</p>
            <div className={`${styles.ingredients} custom-scroll`}>
                {ingredients && ingredients.length > 0 && ingredients.map((ingredient: any, key: number) => {
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
                <p className={`${styles.date} text text_type_main-default text_color_inactive`}>{when}</p>
                <div className={`${styles.priceContainer}`}>
                    <p className={`${styles.totalPrice} text text_type_digits-default`}>{price}</p>
                    <CurrencyIcon type='primary' />
                </div>
            </footer>
        </div>
    )
}