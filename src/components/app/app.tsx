import styles from "./app.module.css";

import { ForgotPasswordPage } from "../pages/ForgotPassword/ForgotPassword";
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import AppHeader from './AppHeader/AppHeader'
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/actions/apiAction";
import { IngredientDetails } from "./BurgerIngredients/ModalInfoIngredients/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { closeInfoModalWindow } from "../../services/actions/currentIngredientsToModalAction";
import { closeOrderedModal } from "../../services/actions/orderedIngredientsAction";
import { ErrorRoutingPage } from "../ErrorRoutingPage/ErrorRoutingPage";


import React, { useEffect } from "react";
import { Modal } from "../Modal/Modal";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { ResetPasswordPage } from "../pages/ResetPassword/ResetPassword";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { MainPage } from "../pages/MainPage/MainPage";
import { Profile } from "../pages/ProfilePage/Profile/Profile";
import { ProtectedRoute } from "../pages/ProtectedRoute/ProtectedRoute";
import { authUser, refreshToken } from "../../services/actions/AuthAction";
import { Ingredient } from "./BurgerIngredients/IngredientList/Ingredient/Ingredient";
import RoutingIngredient from "../pages/RoutringIngredient/RoutingIngredient";
import RoutingOverlay from "../pages/RoutingIngredientOverlay/RoutingIngreidentOverlay";
import { Feed } from "../Feed/Feed";
import HistoryOfOrders from "../pages/HistoryOfOrders/HistroryOfOrders";
import RoutingOrder from "../pages/RoutingOrder/RoutingOrder";
import { useAppDispatch, useAppSelector } from "../../services/hooks/reduxHooks";


function App() {
  const orderModal = useAppSelector((state: IReducer) => state.orderedIngredientsReducer.modalOpened);

  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;


  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div className={styles.app}>
      <pre className={styles.container}>
        <AppHeader />
        <Routes location={backgroundLocation || location}>
          <Route
            path='/'
            element={<MainPage />}
          />
          <Route path='ingredients/:id'
          element={<RoutingIngredient/>}/>
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
            element={<ResetPasswordPage />}
          />
          <Route
            path='/profile' element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } >
            <Route path=':user-profile' element={<Profile />} />
            <Route path=':order-history' element={<HistoryOfOrders />} />
            <Route path=':exit' element={<p>здесь будет выход</p>} />
          </Route>
          <Route path='/profile/:order-history/:id' element={<RoutingOrder />} />

          <Route path='/feed' element={<Feed />} />
          <Route path='/feed/:id' element={<RoutingOrder />} />

          <Route path='*' element={<ErrorRoutingPage />} />
        </Routes>

        <Routes>
          <Route path='/ingredients/:id'
            element={<Modal handleClose={closeInfoModalWindow} title={'Детали ингредиента'}>
              <IngredientDetails />
            </Modal>} />
        </Routes>


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

interface IReducer {
  orderedIngredientsReducer?: any;
  currentIngredientReducer?: any;
}

export default App;
