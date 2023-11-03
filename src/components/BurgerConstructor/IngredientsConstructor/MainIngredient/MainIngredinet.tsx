import React, { useRef } from 'react';
import styles from './MainIngredient.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { sortingIngredientsGenerator } from '../../../../services/actions/ingredientsConstructorAction';
import { ingredientPropType } from '../../../../utils/prop-types';
import PropTypes from "prop-types";

export const MainIngredient = ({ ingredient, deleteIngredient, index }) => {
    const dispatch = useDispatch();

    const [, drag] = useDrag({
        type: 'constructorIngredient',
        item: {
            ingredient,
            index
        }
    })

    const ref = useRef(null)

    const [, drop] = useDrop({
        accept: 'constructorIngredient',
        hover (item: any, monitor) {
            if (!ref.current) {
              return
            }

            const dragIndex = item.index
            const hoverIndex = index

            console.log(index)
            if (dragIndex === hoverIndex) {
              return
            }

            const hoverBoundingRect = ref.current.getBoundingClientRect()

            const hoverMiddleY =
              (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
              return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
              return
            }

            dispatch(sortingIngredientsGenerator(dragIndex, hoverIndex))

            item.index = hoverIndex
          }
    })

    drag(drop(ref))
    return (
            <div className={styles.ingredient}
                key={index}
                ref={ref}
            >
                <DragIcon type='primary'/>
                <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    isLocked={false}
                    thumbnail={ingredient.image}
                    handleClose={() => deleteIngredient(ingredient)}
                />
            </div>
    )
}

interface IProps {
  index: number;
}