import React from "react";
import styles from './Order.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../services/hooks/reduxHooks";
import { v4 as uuid4 } from "uuid";
import { refreshToken } from "../../../services/actions/AuthAction";

export const Order: React.FC<IProps> = ({ title, ingredients, date, numbers, id, from }) => {

    const location = useLocation();

    const allIngredients = useAppSelector(state => state.apiReducer.ingredientData);

    const allIngredientsInOrder = ingredients && ingredients.map((ingredient: string, i: number) => {
        return allIngredients.some((ing) => { return ing._id === ingredient })
            ? allIngredients.find((ing) => ing._id === ingredient)
            : null
    });

    const ingredientsInOrder = Array.from(new Set(allIngredientsInOrder))
    ingredientsInOrder.length = 4;

    const totalPrice = allIngredientsInOrder && allIngredientsInOrder.reduce((acc: any, item: any) => {
        return acc + item.price
    }, 0);


    return (
        <Link to={`${id}`} state={{from: from, backgroundLocation: location}} className={`${styles.container}`} onClick={refreshToken}>
            <div className={`${styles.order}`}>
                <p className={`${styles.numberOrder} text text_type_digits-default`}>{numbers}</p>
                <p className={`${styles.timer} text text_type_main-default text_color_inactive`}>{date}</p>
            </div>
            <h2 className={`${styles.title} text text_type_main-medium`}>{title}</h2>
            <div className={`${styles.details}`}> 
                <div className={`${styles.ingredients}`}>
                    {ingredientsInOrder && ingredientsInOrder.length > 0 && ingredientsInOrder.map((ingredient: any, i: number) => {
                        return (
                            <img src={ingredient.image} alt={ingredient.name} style={{ zIndex: ingredientsInOrder.length - i }} className={`${styles.image}`} key={ingredient._id}/>
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
    id: string;
    from: string;
}