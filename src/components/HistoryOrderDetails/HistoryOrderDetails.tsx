import React, { useEffect } from "react";
import styles from './HistoryOrderDetails.module.css'
import { TIngredientObject } from "../../utils/constantsOfTS";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hooks/reduxHooks";
import { getData } from "../../services/actions/apiAction";


export const HistoryOrderDetails = () => {

    const dispatch = useAppDispatch();

    const { id } = useParams();

    const numbers = '#034533'
    const title = 'бургер говна';
    const status = 'выполнен';
    const ingredients: TIngredientObject[] = [];
    const when = 'вчера';
    const price = '50'


    return (
        <div className={`${styles.conrainer}`}>
            <p className={`${styles.numbers}`} >{numbers}</p>
            <h2 className={`${styles.title}`}>{title}</h2>
            <p className={`${status === 'выполнен' ? styles.statusGreen : styles.status}`}>{status}</p>
            <p className={`${styles.text}`}>Состав:</p>
            <div className={`${styles.ingredients}`}>
                {ingredients && ingredients.length > 0 && ingredients.map((ingredient: TIngredientObject) => {
                    return (
                        <img src={ingredient.image} className={styles.image} />
                    )
                })}
                <footer className={`${styles.footer}`}>
                    <p className={`${styles.date}`}>{when}</p>
                    <div className={`${styles.priceContainer}`}>
                        <p className={`${styles.totalPrice}`}>{price}</p>
                        <CurrencyIcon type='primary' />
                    </div>
                </footer>
            </div>
        </div>
    )
}