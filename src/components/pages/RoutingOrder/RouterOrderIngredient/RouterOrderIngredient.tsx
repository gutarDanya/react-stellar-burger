import React from "react";;
import styles from './RouterOrderIngredient.module.css';
import { Ingredient } from "../../../app/BurgerIngredients/IngredientList/Ingredient/Ingredient";

export const RouterOrderIngredient: React.FC<IProps> = ({image, name, price}) => {
    return (
        <div className={`${styles.ingredient}`}>
            <img src={image} alt={name}/>
            <p className={`${styles.name}`}>{name}</p>
            <p className={`${styles.price}`}>{price}</p>
        </div>
    )
}

interface IProps {
    image: string;
    name: string;
    price: number | string;
}