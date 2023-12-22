import React, { useEffect, forwardRef } from "react";
import { useSelector } from "react-redux";
import { Ingredient } from "./Ingredient/Ingredient";
import styles from './IngredientList.module.css';
import PropTypes from "prop-types";


export const IngredientList:React.FC<IProps> = React.forwardRef(({ title, type}, ref) => {

    const ingredients = useSelector((state: IReducers) => state.apiReducer.ingredientData);

    return (
        <section
        ref={ref}>
            <h3 className={styles.title}>{title}</h3>
            <nav className={styles.container}>
                {ingredients && ingredients.length > 0 && ingredients.map((ingredient: IIngredient, i: any) => {
                    if (ingredient.type === `${type}`) {
                        return (
                            <Ingredient ingredient={ingredient} key={ingredient._id} />
                        )
                    }
                })}
            </nav>
        </section>
    )
}
)

type IProps = {
    title: string;
    type: string;
} & React.RefAttributes<HTMLDivElement>

interface IReducers {
    apiReducer: any;
}

interface IIngredient {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile?: string;
    image_large?: string;
    __v: number;
}