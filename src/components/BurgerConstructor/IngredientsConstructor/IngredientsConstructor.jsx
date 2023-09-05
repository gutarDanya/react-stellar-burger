import React from 'react';
import styles from './IngredientsConstructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeIngredient } from '../../../services/actions/ingredientsConstructorAction';
import { removeCount } from '../../../services/actions/apiAction';
import { MainIngredient } from './MainIngredient/MainIngredinet';
import {v4 as uuid4 } from 'uuid';
import PropTypes from "prop-types";



export const IngredientsConstructor = ({ main, bun }) => {
    const dispatch = useDispatch();


    const deleteIngredient = (ingredient) => {
        dispatch(removeIngredient(ingredient))
        dispatch(removeCount(ingredient))
    }


    return (<>
        {bun && bun.length !== 0
            ? < ConstructorElement
                text={`${bun.name} (верх)`}
                thumbnail={bun.image}
                price={bun.price}
                type='top'
                isLocked={true}
            />
            : null}
        {main && main.length > 0 && main.map((ingredient, i) => {
            return (
                    <MainIngredient key ={i} ingredient={ingredient} deleteIngredient={deleteIngredient} index={i} />
            )
        })}
        {bun && bun.length !== 0
            ? < ConstructorElement
                text={`${bun.name} (низ)`}
                thumbnail={bun.image}
                price={bun.price}
                type='bottom'
                isLocked={true}
            />
            : null}
    </>
    )
}

IngredientsConstructor.propTypes = {
    main: PropTypes.array,
}