import React from 'react';
import styles from './IngredientsConstructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeIngredient } from '../../../services/actions/ingredientsConstructorAction';
import { removeCount } from '../../../services/actions/apiAction';
import { MainIngredient } from './MainIngredient/MainIngredinet';
import PropTypes from "prop-types";
import { useAppDispatch } from '../../../services/hooks/reduxHooks';
import { TIngredientObject } from '../../../utils/constantsOfTS';

const initialStateOfBun = {
    "_id": null,
     "name":null,
     "type":null,
     "proteins":null,
     "fat":null,
     "carbohydrates":null,
     "calories":null,
     "price":null,
     "image":null,
     "image_mobile":null,
     "image_large":null ,
     "__v": null
}



export const IngredientsConstructor:React.FC<IProps> = ({ main, bun = initialStateOfBun }) => {
    const dispatch =  useAppDispatch();


    const deleteIngredient = (ingredient: TIngredientObject) => {
        dispatch(removeIngredient(ingredient))
        dispatch(removeCount(ingredient))
    }


    return (<>
        {bun && bun.name
            ? < ConstructorElement
                text={`${bun.name} (верх)`}
                thumbnail={bun.image || ''}
                price={bun.price || 0}
                type='top'
                isLocked={true}
            />
            : null}
        {main && main.length > 0 && main.map((ingredient: TIngredientObject, i) => {
            return (
                    <MainIngredient key={ingredient.superId} ingredient={ingredient} deleteIngredient={deleteIngredient} index={i} />
            )
        })}
        {bun && bun.name
            ? < ConstructorElement
                text={`${bun.name} (низ)`}
                thumbnail={bun.image || ''}
                price={bun.price || 0}
                type='bottom'
                isLocked={true}
            />
            : null}
    </>
    )
}

interface IProps {
    main?: TIngredientObject[];
    bun?: TIngredientObject;
};