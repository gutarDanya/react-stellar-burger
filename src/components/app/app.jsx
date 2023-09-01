import styles from "./app.module.css";
import { data } from "../../utils/data";

import AppHeader from './AppHeader/AppHeader.jsx'
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../services/reducers/apiReducer";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import React from 'react'
import { useEffect, useState } from "react";


function App() {

  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.apiReducer.ingredientData)

  useEffect(() => {
    dispatch(getData())
}, [])


  return (
    <div className={styles.app}>
      <pre className={styles.container}>
        <>
          <AppHeader />
          <div className={styles.main}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients ingredients={ingredients}/>
              <BurgerConstructor />
            </DndProvider>
          </div>
        </>
      </pre>
    </div>
  );
}

export default App;
