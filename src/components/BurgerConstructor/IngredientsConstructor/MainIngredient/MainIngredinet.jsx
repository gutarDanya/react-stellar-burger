import React, { useRef } from 'react';
import styles from './MainIngredient.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { sortingIngredientsGenerator } from '../../../services/actions/ingredientsConstructorAction';

export const MainIngredient = ({ ingredient, deleteIngredient, index }) => {
    const dispatch = useDispatch();

    const [, consructorDrag] = useDrag({
        type: 'constructorIngredient',
        item: {
            ingredient,
            index
        }
    })

    const [, constructorDrop] = useDrop({
        accept: 'constructorIngredient',
        drop(item) {
            console.log({ ingredient, item })
            dispatch(sortingIngredientsGenerator(item.ingredient, ingredient))
        }
    })

    return (
        <div
            ref={constructorDrop}
        >
            <div className={styles.ingredient}
                key={index}
                ref={consructorDrag}
            >
                <DragIcon />
                <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    isLocked={false}
                    thumbnail={ingredient.image}
                    handleClose={() => deleteIngredient(ingredient)}
                />
            </div>
        </div>
    )
}