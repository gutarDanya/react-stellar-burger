import React from "react";
import styles from './Order.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredientObject } from "../../../utils/constantsOfTS";

export const Order: React.FC<IProps> = ({title, price, ingredients, date, numbers}) => {
    return (
        <div className={`${styles.container}`} >
            <div className={`${styles.order}`}>
                <p className={`${styles.numberOrder} text text_type_digits-default`}>{numbers}</p>
                <p className={`${styles.timer} text text_type_main-default text_color_inactive`}>{date}</p>
            </div>
            <h2 className={`${styles.title} text text_type_main-medium`}>{title}</h2>
            <div className={`${styles.details}`}>
                <div className={`${styles.ingredients}`}>{ingredients}</div>
                <p className={`${styles.price} text text_type_digits-medium`}>{price}</p>
                <CurrencyIcon type='primary' />
            </div>
        </div>
    )
}

interface IProps {
    title: string;
    price: number | string;
    ingredients?: TIngredientObject[];
    date: string;
    numbers: number | string;
}