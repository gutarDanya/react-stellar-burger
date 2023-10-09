import styles from "./app.module.css";
import { data } from "../../utils/data";
import { ForgotPasswordPage } from "../pages/ForgotPassword/ForgotPassword";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation
} from 'react-router-dom'

import AppHeader from './AppHeader/AppHeader.jsx'
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/actions/apiAction";
import { IngredientDetails } from "./BurgerIngredients/ModalInfoIngredients/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { closeInfoModalWindow } from "../../services/actions/currentIngredientsToModalAction";
import { closeOrderedModal } from "../../services/actions/orderedIngredientsAction";

import React from 'react'
import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { ResetPasswordPage } from "../pages/ResetPassword/ResetPassword";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { MainPage } from "../pages/MainPage/MainPage";


function App() {


  const ingredientModal = useSelector(state => state.currentIngredientReducer.modalWindowOpened);
  const orderModal = useSelector(state => state.orderedIngredientsReducer.modalOpened);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <Router>
    <div className={styles.app}>
      <pre className={styles.container}>
        <AppHeader />
        <Switch>
          <Route path='/' exact={true}>
            <MainPage />
          </Route>
          <Route path='/login' exact={true}>
            <LoginPage />
          </Route>
          <Route path='/registration' exact={true}>
            <RegistrationPage />
          </Route>
          <Route path='/forgot-password' exact={true}>
            <ForgotPasswordPage />
          </Route>
          <Route path='/reset-password' exact={true}>
            <ResetPasswordPage />
          </Route>
          <Route path='profile' exact={true}>
            <ProfilePage />
          </Route>
        </Switch>
        
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
    </Router>
  );
}

export default App;
