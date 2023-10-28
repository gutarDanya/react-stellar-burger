import React, { useEffect } from "react";
import styles from './RoutingIngredient.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InfoOfIngridient from "../app/BurgerIngredients/ModalInfoIngredients/InfoOfIngredient/InfoOfIngredinet";
import { getCurrentIngredientToRouting, getData } from "../../services/actions/apiAction";

const RoutingIngredient = () => {

    const dispatch = useDispatch();

    const { id } = useParams();
    
    useEffect(() => {
        dispatch(getCurrentIngredientToRouting(id.split(':')[1]))
    })

    const currentIngredient = useSelector(state => state.apiReducer.currentIngredient)
    
        return(
            currentIngredient
            ? (
                <div className={styles.container}>
            <h1 className={styles.title}>Детали ингредиентов</h1>
            <img src={currentIngredient.image_large}/>
            <InfoOfIngridient ingredient={currentIngredient} />
        </div>
            )
            : null
        )
}

export default RoutingIngredient;