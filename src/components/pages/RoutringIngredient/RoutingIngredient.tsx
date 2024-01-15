import React, { useEffect } from "react";
import styles from './RoutingIngredient.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InfoOfIngridient from "../../app/BurgerIngredients/ModalInfoIngredients/InfoOfIngredient/InfoOfIngredinet";
import { getCurrentIngredientToRouting, getData } from "../../../services/actions/apiAction";
import { useAppDispatch, useAppSelector } from "../../../services/hooks/reduxHooks";

const RoutingIngredient = () => {


    const dispatch = useAppDispatch();

    const { id } = useParams();

    const currentIngredient = useAppSelector(state => state.apiReducer.currentIngredient);
    const allIngredients = useAppSelector(state => state.apiReducer.ingredientData)

    useEffect(() => {
     getData()
    }, [])

    useEffect(() => {
        id
        ? dispatch(getCurrentIngredientToRouting(id.split(':')[1]))
        : console.log(id)
    }, [allIngredients]) 


    
        return(
            currentIngredient
            ? (
                <div className={styles.container}>
            <h1 className={styles.title}>Детали ингредиентов</h1>
            <img src={currentIngredient.image_large} className={styles.image}/>
            <InfoOfIngridient ingredient={currentIngredient} />
        </div>
            )
            : null
        )
}

export default RoutingIngredient;