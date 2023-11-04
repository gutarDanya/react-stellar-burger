import React from 'react';
import styles from './MainPage.module.css';
import BurgerConstructor from '../../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../../app/BurgerIngredients/BurgerIngredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const MainPage = () => {
    return (
        <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
    )
}