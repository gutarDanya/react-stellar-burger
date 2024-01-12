import React from 'react';

import styles from './InfoOfIngredient.module.css';
import PropTypes from "prop-types";
import { TIngredientObject } from '../../../../../utils/constantsOfTS';

const InfoOfIngridient:React.FC<IProps> = ({ingredient}) => {


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{ingredient.name}</h2>
            <div className={styles.main}>
                <div className={styles.info}>
                    <h3 className={styles.text}>Калории,ккал</h3>
                    <p className={styles.numbers}>{ingredient.calories}</p>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.text}>Белки, г</h3>
                    <p className={styles.numbers}>{ingredient.proteins}</p>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.text}>Жиры, г</h3>
                    <p className={styles.numbers}>{ingredient.fat}</p>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.text}>Углеводы, г</h3>
                    <p className={styles.numbers}>{ingredient.carbohydrates}</p>
                </div> 
            </div>
        </div>
        
    )
}

export default InfoOfIngridient;

interface IProps {
    ingredient: TIngredientObject;
};