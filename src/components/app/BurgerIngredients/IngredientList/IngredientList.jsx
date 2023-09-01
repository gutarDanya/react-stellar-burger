import React from "react";
import { useSelector } from "react-redux";
import { Ingredient } from "./Ingredient/Ingredient";
import styles from './IngredientList.module.css';


export const IngredientList = ({title, type}) => {

    const ingredients = useSelector(state => state.apiReducer.ingredientData);

    return(
        <section>
            <h3 className={styles.title}>{title}</h3>
            <nav className={styles.container}>
            {ingredients && ingredients.length > 0 && ingredients.map((ingredient, i) => {
                if (ingredient.type === `${type}`) {
                    return (
                        <Ingredient ingredient={ingredient} key={i}/>
                    )
                }
            })}
            </nav>
        </section>
    )
}
