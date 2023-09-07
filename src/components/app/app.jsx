import styles from "./app.module.css";
import { data } from "../../utils/data";

import AppHeader from './AppHeader/AppHeader.jsx'
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/actions/apiAction";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { IngredientDetails } from "./BurgerIngredients/ModalInfoIngredients/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { closeInfoModalWindow } from "../../services/actions/currentIngredientsToModalAction";
import { closeOrderedModal } from "../../services/actions/orderedIngredientsAction";

import React from 'react'
import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";


function App() {

  const ingredientModal = useSelector(state => state.currentIngredientReducer.modalWindowOpened);
  const orderModal = useSelector(state => state.orderedIngredientsReducer.modalOpened);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div className={styles.app}>
      <pre className={styles.container}>
        <AppHeader />
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
{       ingredientModal
        ? <Modal handleClose={closeInfoModalWindow} title={'Детали ингредиента'}>
          <IngredientDetails />
        </Modal>
        : null
}

{orderModal
        ? <Modal handleClose={closeOrderedModal} title={''}>
          <OrderDetails />
        </Modal>
        : null
}
      </pre>
    </div>
  );
}

export default App;
