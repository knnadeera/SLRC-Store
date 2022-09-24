import React, { useEffect, useState, Suspense } from "react";
import Contacts from "./components/Layout/Contacts";
import Header from "./components/Layout/Header";
import classes from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./Store/ui-slice";
import { sendCartData, fetchCartData } from "./lib/cart-action";
import { Route, Switch } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AddNewParts from "./pages/Admin/AddNewParts";

const PartDetails = React.lazy(() => import("./pages/PartDetails/PartDetails"));
const Notification = React.lazy(() => import("./components/UI/Notification"));
const Cart = React.lazy(() => import("./components/Cart/Cart"));
const User = React.lazy(() => import("./components/Layout/User/User"));
const Parts = React.lazy(() => import("./components/Parts/Parts"));

let isInitial = true;

const App = (props) => {
  const [showNotification, isShowNotification] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
      isShowNotification(true);
    }
  }, [cart, dispatch]);

  const cartShownHandler = () => {
    dispatch(uiActions.cartToggle());
    dispatch(fetchCartData());
  };

  const cartCloseHandler = () => {
    dispatch(uiActions.cartToggle());
  };

  const userFormShowHandler = () => {
    dispatch(uiActions.userToggle());
  };

  const closeHandler = () => {
    isShowNotification(false);
  };

  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      {showNotification && notification && (
        <Notification
          onClose={closeHandler}
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <div className={classes.app}>
        {showCart && <Cart onClose={cartCloseHandler} />}

        <Contacts />
        <Header
          onShowCart={cartShownHandler}
          onShowUser={userFormShowHandler}
        />
        <main>
          <Switch>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/partdetails/:partId">
              <PartDetails />
            </Route>
            <Route path="/admin/addnewpart">
              <AddNewParts />
            </Route>
            <Route path="/">
              <Parts />
            </Route>
          </Switch>
        </main>
      </div>
    </Suspense>
  );
};

export default App;
