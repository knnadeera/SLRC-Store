import React, { Fragment, useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AccountDetails from "./UserProfile/AccountDetails";
import NewPassword from "./UserProfile/NewPassword";
import classes from "./UserProfile.module.css";
import UserOrders from "./UserProfile/UserOrders";
import AuthContext from "../../../Store/auth-context";

const UserProfile = (props) => {
  const [isShowOrders, setIsShowOrders] = useState(true);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [accountDetails, setAccountDetails] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      const res = await fetch(
        `https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/userData/${localStorage.localId}.json`
      );
      const resData = await res.json();

      const loadedAccountDetails = [];

      for (const key in resData) {
        loadedAccountDetails.push({
          key: key,
          id: key,
          userName: resData[key].userName,
          email: resData[key].email,
          mobile: resData[key].mobileNum,
          address: resData[key].address,
          city:resData[key].city,
          postalCode:resData[key].postalCode,
          country:resData[key].country
        });
      }
      if (localStorage.localId === "nHb0gAendUVUbs66zSYiS7CAirk1") {
        setIsAdmin(true);
      }

      setAccountDetails(loadedAccountDetails);
    };

    fetchAccountDetails();
  }, [setAccountDetails]);

  const logoutHandler = () => {
    authCtx.logout();
  };

  const accountDetailsList = accountDetails.map((details) => (
    <AccountDetails
      key={details.key}
      userName={details.userName}
      email={details.email}
      mobile={details.mobile}
      address={details.address}
      city={details.city}
      postalCode={details.postalCode}
      country={details.country}
    />
  ));

  const ordersShowHandler = () => {
    setIsShowOrders(true);
    setShowAccountDetails(false);
    setChangePassword(false);
  };

  const changePasswordHandler = () => {
    setChangePassword(true);
    setShowAccountDetails(false);
    setIsShowOrders(false);
  };

  const accountDetailsHandler = () => {
    setShowAccountDetails(true);
    setChangePassword(false);
    setIsShowOrders(false);
  };

  const myOrdersClasses = `${
    isShowOrders ? classes.selected : ''
  }`;

  const accountDetailsClasses = `${
    showAccountDetails ? classes.selected : ''
  }`;

  const changePasswordClasses = `${
    changePassword ? classes.selected : ''
  }`;

  return (
    <Fragment>
      <div className={classes.user_profile}>
        <div className={classes.menu}>
          {isAdmin && <NavLink to="/admin/addnewpart">Add New Part</NavLink>}
          <p onClick={ordersShowHandler} className={myOrdersClasses}>
            My Orders
          </p>
          <p onClick={accountDetailsHandler} className={accountDetailsClasses}>
            Account Details
          </p>
          <p onClick={changePasswordHandler} className={changePasswordClasses}>
            Change Password
          </p>
          <button onClick={logoutHandler}>Logout</button>
        </div>
        <div className={classes.body}>
          {isShowOrders && <UserOrders />}
          {showAccountDetails && accountDetailsList}
          {changePassword && <NewPassword />}
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
