import React from 'react';
import styles from './Souce.module.css';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';


export const Souce = ({souses, openPopup}) => {

    const [, ref] = useDrag({
        type: 'ingredient',
        item: {
            ingredient: souses
        }
    })

    return(
        <div className={styles.ingredient}
        onClick={() => openPopup(souses)}
        ref={ref}
        key={souses._id}>
            {/* {souses.name === 'Соус традиционный галактический'
            ? <Counter count={1} size='default' extraClass='m-1' />
            : null} */}
            {souses.__v !== 0
            ? <Counter count={souses.__v} size='default' extraClass='m-1'/>
            : null}
            <img src={souses.image} alt={souses.alt} />
            <h4 className={styles.price}>{souses.price} <CurrencyIcon /></h4>
            <p className={styles.name}>{souses.name}</p>
        </div>
    )
}