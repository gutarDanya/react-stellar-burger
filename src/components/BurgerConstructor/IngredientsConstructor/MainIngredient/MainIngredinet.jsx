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

    const [, consructorDrag] = useDrag({
        type: 'constructorIngredient',
        item: {
            ingredient,
            index
        }
    })


    const ingRef = useRef(null)

    const [, constructorDrop] = useDrop({
        accept: 'constructorIngredient',
        drop(item) {
            console.log({ ingredient, item })
            dispatch(sortingIngredientsGenerator(item.ingredient, ingredient))
        },
        // hover(item, monitor) {
        //     if (!ingRef.current) {
        //       return
        //     }
        //     const dragIndex = item.index
        //     const hoverIndex = index
        //     // Don't replace items with themselves
        //     if (dragIndex === hoverIndex) {
        //       return
        //     }
        //     // Determine rectangle on screen
        //     const hoverBoundingRect = ingRef.current.getBoundingClientRect()
        //     // Get vertical middle
        //     const hoverMiddleY =
        //       (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        //     // Determine mouse position
        //     const clientOffset = monitor.getClientOffset()
        //     // Get pixels to the top
        //     const hoverClientY = clientOffset.y - hoverBoundingRect.top
        //     // Only perform the move when the mouse has crossed half of the items height
        //     // When dragging downwards, only move when the cursor is below 50%
        //     // When dragging upwards, only move when the cursor is above 50%
        //     // Dragging downwards
        //     if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        //       return
        //     }
        //     // Dragging upwards
        //     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        //       return
        //     }
        //     // Time to actually perform the action
        //     moveCard(dragIndex, hoverIndex)
        //     // Note: we're mutating the monitor item here!
        //     // Generally it's better to avoid mutations,
        //     // but it's good here for the sake of performance
        //     // to avoid expensive index searches.
        //     item.index = hoverIndex
        //   }
    })

    return (
        <div ref={ingRef}>
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
        </div>
    )
}

MainIngredient.propTypes = {
ingredient: PropTypes.object.isRequired,
deleteIngredient: PropTypes.func.isRequired,
index: PropTypes.number.isRequired
}