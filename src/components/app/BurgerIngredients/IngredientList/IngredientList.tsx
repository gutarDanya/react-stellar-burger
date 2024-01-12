import React, { useEffect, forwardRef } from "react";
import { useSelector } from "react-redux";
import { Ingredient } from "./Ingredient/Ingredient";
import styles from './IngredientList.module.css';
import PropTypes from "prop-types";
import { useAppSelector } from "../../../../services/hooks/reduxHooks";
import { TIngredientObject } from "../../../../utils/constantsOfTS";


export const IngredientList:React.FC<IProps> = React.forwardRef(({ title, type}, ref) => {

    const ingredients = useAppSelector(state => state.apiReducer.ingredientData);

    return (
        <section
        ref={ref}>
            <h3 className={styles.title}>{title}</h3>
            <nav className={styles.container}>
                {ingredients && ingredients.length > 0 && ingredients.map((ingredient: TIngredientObject, i: string | number) => {
                    if (ingredient.type === `${type}`) {
                        return (
                            <Ingredient ingredient={ingredient} key={ingredient._id}/>
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