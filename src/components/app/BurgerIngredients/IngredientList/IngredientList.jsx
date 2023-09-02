import React, { useEffect, forwardRef } from "react";
import { useSelector } from "react-redux";
import { Ingredient } from "./Ingredient/Ingredient";
import styles from './IngredientList.module.css';
import { getCurrentTab } from "../../../services/actions/scrollIngredientsAction";
import { useInView } from "react-intersection-observer";


export const IngredientList = React.forwardRef(({ title, type}, ref) => {

    const ingredients = useSelector(state => state.apiReducer.ingredientData);

    return (
        <section
        ref={ref}>
            <h3 className={styles.title}>{title}</h3>
            <nav className={styles.container}>
                {ingredients && ingredients.length > 0 && ingredients.map((ingredient, i) => {
                    if (ingredient.type === `${type}`) {
                        return (
                            <Ingredient ingredient={ingredient} key={i} />
                        )
                    }
                })}
            </nav>
        </section>
    )
}
)
