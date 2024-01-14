import React, { useRef } from 'react';
import styles from './MainIngredient.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { sortingIngredientsGenerator } from '../../../../services/actions/ingredientsConstructorAction';
import { useAppDispatch } from '../../../../services/hooks/reduxHooks';
import { TIngredientObject } from '../../../../utils/constantsOfTS';

export const MainIngredient: React.FC<IProps> = ({ ingredient, deleteIngredient, index }) => {
  const dispatch = useAppDispatch();

  const [, drag] = useDrag({
    type: 'constructorIngredient',
    item: {
      ingredient,
      index
    }
  })

  const ref = useRef<HTMLDivElement | null>(null);

  const [, drop] = useDrop({
    accept: 'constructorIngredient',
    hover(item: any, monitor) {
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

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset
        ? clientOffset.y - hoverBoundingRect.top
        : null

      if (hoverClientY !== null) {
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }
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
      <DragIcon type='primary' />
      <ConstructorElement
        text={ingredient.name || ''}
        price={ingredient.price || 0}
        isLocked={false}
        thumbnail={ingredient.image || ''}
        handleClose={() => deleteIngredient(ingredient)}
      />
    </div>
  )
}

interface IProps {
  index: number;
  ingredient: TIngredientObject;
  deleteIngredient: (ingredient: TIngredientObject) => void;
}
