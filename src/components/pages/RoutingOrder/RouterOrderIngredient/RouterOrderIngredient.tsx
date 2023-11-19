import React from "react";
import styles from './RouterOrderIngredient.module.css';

export const RouterOrderIngredient: React.FC<IProps> = ({image, name, price}) => {
    return (
        <div className={`${styles.ingredient}`}>
            <img src={image} className={styles.image} alt={name}/>
            <p className={`${styles.name} text text_type_main-default`}>{name}</p>
            <p className={`${styles.price} text text_type_digits-default`}>{price}</p>
        </div>
    )
}

interface IProps {
    image: string;
    name: string;
    price: number | string;
}