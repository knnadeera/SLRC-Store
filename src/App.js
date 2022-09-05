import React, { Fragment, useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Contacts from "./components/Layout/Contacts";
import Header from "./components/Layout/Header";
import User from "./components/Layout/User/User";
import Parts from "./components/Parts/parts";
import classes from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./Store/ui-slice";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./Store/cart-action";
import { Route, Switch } from "react-router-dom";
import PartDetails from "./pages/PartDetails/PartDetails";


let isInitial = true;

const App = (props) => {
  const [showNotification, isShowNotification] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showUser = useSelector((state) => state.ui.userIsVisible);
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
  };

  const cartCloseHandler = () => {
    dispatch(uiActions.cartToggle());
  };

  const userFormShowHandler = () => {
    dispatch(uiActions.userToggle());
  };

  const userFormCloseHandler = () => {
    dispatch(uiActions.userToggle());
  };

  const closeHandler = () => {
    isShowNotification(false);
  };

  return (
    <Fragment>
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
        {showUser && <User onClose={userFormCloseHandler} />}
        <Contacts />
        <Header
          onShowCart={cartShownHandler}
          onShowUser={userFormShowHandler}
        />
        <main>
          <Switch>
            <Route path="/partdetails/:partId">
              <PartDetails />
            </Route>
            <Route path="/">
              <Parts />
            </Route>
            
          </Switch>
        </main>
      </div>
    </Fragment>
  );
};

export default App;
