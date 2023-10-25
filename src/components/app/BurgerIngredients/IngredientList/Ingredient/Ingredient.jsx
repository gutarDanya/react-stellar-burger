import React from "react";
import { useDrag } from "react-dnd";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { OPEN_INFO_MODAL_WINDOW } from "../../../../../services/actions/currentIngredientsToModalAction";
import styles from './Ingredient.module.css'
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Ingredient = ({ingredient}) => {

    const dispatch = useDispatch();

    const openPopup = (ingredient) => {
        dispatch({type: OPEN_INFO_MODAL_WINDOW, payload: ingredient})
    }

    const [, ref] = useDrag({
        type: 'ingredient',
        item: {
            ingredient
        }
    })

    const location = useLocation();

    return(
        <Link
            to={`/ingredients/:${ingredient._id}`}
            state={{backgroundLocation: location}}
            className={styles.ingredient}
            onClick={() => openPopup(ingredient)}
            ref={ref}
            key={ingredient._id}>
                {ingredient.__v !== 0
                ? <Counter count={ingredient.__v} size='default' extraClass='m-1'/>
                : null}
            <img src={ingredient.image} alt={ingredient.alt} />
            <h4 className={styles.price}>{ingredient.price} <CurrencyIcon /></h4>
            <p className={styles.name}>{ingredient.name}</p>
        </Link>
    )
}

Ingredient.propTypes = {
    ingredient: PropTypes.object.isRequired
}