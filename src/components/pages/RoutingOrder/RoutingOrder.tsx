import React from "react";
import styles from './Routing.module.css';
import { Ingredient } from "../../app/BurgerIngredients/IngredientList/Ingredient/Ingredient";
import { RouterOrderIngredient } from "./RouterOrderIngredient/RouterOrderIngredient";

export const RoutingIngredient = () => {
    const order: string | number = '#123123';
    const title: string = 'бургер залупы'
    const ingredient = [{
        "_id":"60666c42cc7b410027a1a9b1",
        "name":"Краторная булка N-200i",
        "type":"bun",
        "proteins":80,
        "fat":24,
        "carbohydrates":53,
        "calories":420,
        "price":1255,
        "image":"https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v":0
     }]

    return(
        <div className={`${styles.page}`}>
            <div className={`${styles.container}`}>
                <p className={`${styles.order}`}>{order}</p>
                <h2 className={`${styles.title}`}>{title}</h2>
                <p className={`${styles.subTitle}`}>Состав:</p>
                <div className={`${styles.ingredients}`}>
                    {ingredient && ingredient.length > 0 && ingredient.map((ingredient) => {
                        return(
                            <RouterOrderIngredient image={ingredient.image} name={ingredient.name} price={ingredient.price} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}