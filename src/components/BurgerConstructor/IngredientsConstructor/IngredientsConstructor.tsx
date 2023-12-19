import React from 'react';
import styles from './IngredientsConstructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeIngredient } from '../../../services/actions/ingredientsConstructorAction';
import { removeCount } from '../../../services/actions/apiAction';
import { MainIngredient } from './MainIngredient/MainIngredinet';
import PropTypes from "prop-types";
import { useAppDispatch } from '../../../services/hooks/reduxHooks';

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


    const deleteIngredient = (ingredient: IIngredient) => {
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
        {main && main.length > 0 && main.map((ingredient: IMain, i) => {
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
    main?: IMain[];
    bun?: IBun;
};

interface IBun extends IIngredient {
    type: 'bun';
};

interface IMain extends IIngredient {
    type: 'main';
};

interface IIngredient {
    _id: string | undefined;
    name: string | undefined;
    proteins: number | undefined;
    fat: number | undefined;
    carbohydrates: number | undefined;
    calories: number | undefined;
    price: number | undefined;
    image: string | undefined;
    image_mobile: string | undefined;
    image_large: string | undefined;
    __v: number;
    main?: string | undefined;
    superId: string | undefined;
    type: 'bun' | 'main'
};