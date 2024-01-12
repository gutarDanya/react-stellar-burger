import styles from "./app.module.css";

import { ForgotPasswordPage } from "../pages/ForgotPassword/ForgotPassword";
import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from 'react-router-dom'

import AppHeader from './AppHeader/AppHeader'
import { getData } from "../../services/actions/apiAction";
import { IngredientDetails } from "./BurgerIngredients/ModalInfoIngredients/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
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
import RoutingIngredient from "../pages/RoutringIngredient/RoutingIngredient";
import { Feed } from "../Feed/Feed";
import HistoryOfOrders from "../pages/HistoryOfOrders/HistroryOfOrders";
import RoutingOrder from "../pages/RoutingOrder/RoutingOrder";
import { useAppDispatch } from "../../services/hooks/reduxHooks";
import { HistoryOrderDetails } from "../HistoryOrderDetails/HistoryOrderDetails";
import { apiReducer, initialState } from "../../services/reducers/apiReducer/apiReducer";


function App() {
  const navigate = useNavigate()

  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;

  const closePopup = () => {
    navigate(-1)
  }

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
            element={<RoutingIngredient />} />
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
            <Route path='user-profile' element={<Profile />} />
            <Route path='order-history' element={<HistoryOfOrders />} />
            <Route path=':exit' element={<p>здесь будет выход</p>} />
          </Route>
          <Route path='/profile/order-history/:id' element={<RoutingOrder />} />

          <Route path='/feed' element={<Feed />} />
          <Route path='/feed/:id' element={<RoutingOrder />} />

          <Route path='*' element={<ErrorRoutingPage />} />
        </Routes>

        {backgroundLocation && <Routes>
          <Route path='/ingredients/:id'
            element={
              <Modal title={'Детали ингредиента'} handleClose={closePopup}>
                <IngredientDetails />
              </Modal>} />

          <Route path='/feed/:id'
            element={
              <Modal title='' handleClose={closePopup}>
                <HistoryOrderDetails />
              </Modal>} />

          <Route path='/profile/order-history/:id'
            element={
              <Modal title="" handleClose={closePopup}>
                <HistoryOrderDetails />
              </Modal>
            } />

          <Route path='/finalorder'
            element={
              <ProtectedRoute>
                <Modal title='' handleClose={closePopup}>
                  <OrderDetails />
                </Modal>
              </ProtectedRoute>} />
        </Routes>}
      </pre>
    </div>
  );
}


export default App;
