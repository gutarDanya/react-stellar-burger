import React, {useRef, useEffect} from 'react';
import styles from './BurgerIngredients.module.css'
import Navigation from './Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { IngredientList } from './IngredientList/IngredientList';
import { useInView } from 'react-intersection-observer';
import { getCurrentTab } from '../../services/actions/scrollIngredientsAction';

function BurgerIngredients () {

    const some = useSelector(state => state.scrollReducer.currentTab)

    console.log(some)

    const dispatch = useDispatch();

    const {ref: bunRef, inView: bunInView} = useInView({
        threshold: 1,
    })

    const {ref: souceRef, inView: souceInView} = useInView({
        threshold: 1
    })

    const {ref: mainRef, inView: mainInView} = useInView({
        threshold: 0.5
    })

    console.log(souceInView, 'соусы')
    console.log(bunInView, 'булки')
    console.log(mainInView, 'начинка')

    useEffect(() => {
        dispatch(getCurrentTab('one'))
    },[bunInView])

    useEffect(() => {
        dispatch(getCurrentTab('two'))
    }, [souceInView])

    useEffect(() => {
        dispatch(getCurrentTab('three'))
        console.log(mainInView)
    }, [mainInView])

    return (
        <section className={styles.burgerIngredients}>
            <h1 className={styles.text}>Соберите бургер</h1>
            <Navigation />
            <div className={`${styles.ingredients} custom-scroll`}>
            <IngredientList type='bun' title='Булки' ref={bunRef}/>
            <IngredientList type='sauce' title='Соусы' ref={souceRef}/>
            <IngredientList type='main' title='Начинка' ref={mainRef}/>
            </div>
        </section>
    )
}


export default BurgerIngredients;