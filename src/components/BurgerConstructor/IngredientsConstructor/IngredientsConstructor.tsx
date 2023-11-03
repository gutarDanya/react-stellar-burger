import React from 'react';
import styles from './IngredientsConstructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeIngredient } from '../../../services/actions/ingredientsConstructorAction';
import { removeCount } from '../../../services/actions/apiAction';
import { MainIngredient } from './MainIngredient/MainIngredinet';
import PropTypes from "prop-types";



export const IngredientsConstructor:React.FC<IProps> = ({ main, bun }) => {
    const dispatch = useDispatch();


    const deleteIngredient = (ingredient: IIngredient) => {
        dispatch(removeIngredient(ingredient))
        dispatch(removeCount(ingredient))
    }

    console.log( main)


    return (<>
        {bun && bun.name
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
                    <MainIngredient key={ingredient.superId} ingredient={ingredient} deleteIngredient={deleteIngredient} index={i} />
            )
        })}
        {bun && bun.name
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

interface IProps {
    main?: IMain[];
    bun?: IBun;
};

interface IBun extends IIngredient {
    type?: 'bun';
};

interface IMain extends IIngredient {
    type?: 'main';
};

interface IIngredient {
    _id?: string;
    name?: string;
    proteins?: number;
    fat?: number;
    carbohydrates?: number;
    calories?: number;
    price?: number;
    image?: string;
    image_mobile?: string;
    image_large?: string;
    __v?: number;
    main?: string;
    superId?: string;
};