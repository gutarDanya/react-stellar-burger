import styles from "./app.module.css";

import { ForgotPasswordPage } from "../pages/ForgotPassword/ForgotPassword";
import {
  Routes,
  Route
} from 'react-router-dom'

import AppHeader from './AppHeader/AppHeader.jsx'
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/actions/apiAction";
import { IngredientDetails } from "./BurgerIngredients/ModalInfoIngredients/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { closeInfoModalWindow } from "../../services/actions/currentIngredientsToModalAction";
import { closeOrderedModal } from "../../services/actions/orderedIngredientsAction";


import React, { useEffect } from "react";
import { Modal } from "../Modal/Modal";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { ResetPasswordPage } from "../pages/ResetPassword/ResetPassword";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { MainPage } from "../pages/MainPage/MainPage";
import { Profile } from "../pages/ProfilePage/Profile/Profile";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { authUser } from "../../services/actions/AuthAction";



function App() {

  const ingredientModal = useSelector(state => state.currentIngredientReducer.modalWindowOpened);
  const orderModal = useSelector(state => state.orderedIngredientsReducer.modalOpened);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
    dispatch(authUser())
  }, [])

  return (
    <div className={styles.app}> 
      <pre className={styles.container}>
        <AppHeader />
        <Routes>
          <Route
            path='/'
            element={<MainPage />}
          />
          <Route
            path='/login'
            element={<LoginPage />}
          />
          <Route
            path='/registration'
            element={<RegistrationPage />}
          />
          <Route
            path='/forgot-password'
            element={<ForgotPasswordPage />}
          />
          <Route
            path='/reset-password'
            exact={<ResetPasswordPage />}
          />
          <Route
            path='/profile' element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } >
            <Route path=':user-profile' element={<Profile />} />
            <Route path=':order-history' element={<p>Здесь будет история хаказов</p>} />
            <Route path=':exit' element={<p>здесь будет выход</p>} />
          </Route>
        </Routes>

        {ingredientModal
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
