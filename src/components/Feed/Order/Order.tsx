import React from "react";
import styles from './Order.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredientObject } from "../../../utils/constantsOfTS";
import { Link } from "react-router-dom";
import { Ingredient } from "../../app/BurgerIngredients/IngredientList/Ingredient/Ingredient";
import { useAppSelector } from "../../../services/hooks/reduxHooks";

export const Order: React.FC<IProps> = ({ title, ingredients, date, numbers, id }) => {

    const allIngredients = useAppSelector((state) => state.apiReducer.ingredientData);

    const ingredientsInOrder = ingredients && ingredients.map((ingredient: string, i: number) => {
        return allIngredients.some((ing) => { return ing._id === ingredient })
            ? allIngredients.find((ing) => ing._id === ingredient)
            : null
    });

    const totalPrice = ingredientsInOrder && ingredientsInOrder.reduce((acc: any, item: any) => {
        return acc + item.price
    }, 0);


    return (
        <Link to={`/ingredient/:${id}`} className={`${styles.container}`} >
            <div className={`${styles.order}`}>
                <p className={`${styles.numberOrder} text text_type_digits-default`}>{numbers}</p>
                <p className={`${styles.timer} text text_type_main-default text_color_inactive`}>{date}</p>
            </div>
            <h2 className={`${styles.title} text text_type_main-medium`}>{title}</h2>
            <div className={`${styles.details}`}>
                <div className={`${styles.ingredients}`}>
                    {ingredientsInOrder && ingredientsInOrder.length > 0 && ingredientsInOrder.map((ingredient: any, i: number) => {
                        return (
                            <img src={ingredient.image} alt={ingredient.name} style={{ zIndex: i }} className={`${styles.image}`} />
                        )
                    }
                    )}
                </div>
                <div className={`${styles.price}`}>
                    <p className={`${styles.price} text text_type_digits-medium`}>{totalPrice}</p>
                    <CurrencyIcon type='primary' />
                </div>
            </div>
        </Link>
    )
}

interface IProps {
    title: string;
    ingredients: string[];
    date: string;
    numbers: number | string;
    id: any;
}