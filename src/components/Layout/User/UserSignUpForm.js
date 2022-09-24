import React, { useRef, useState } from "react";
import classes from "./UserSignUpForm.module.css";

const isEmpty = (value) => value.trim().length === 0;
const isPostalCode = (value) => value.trim().length === 5;

const UserSignUpForm = (props) => {
  const [isFormValid, setIsFormValid] = useState({
    userName: true,
    email: true,
    password: true,
    mobileNum: true,
    address: true,
    city: true,
    postalCode: true,
    country: true,
  });

  const userNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const mobileNumberInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();
  const countryInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredUserName = userNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredMobileNumber = mobileNumberInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;

    const userNameIsVlid = !isEmpty(enteredUserName);
    const emailIsVlid = !isEmpty(enteredEmail);
    const passwordIsVlid = !isEmpty(enteredPassword);
    const mobileNumIsVlid = !isEmpty(enteredMobileNumber);
    const addressIsVlid = !isEmpty(enteredAddress);
    const cityIsVlid = !isEmpty(enteredCity);
    const postalCodeIsVlid = isPostalCode(enteredPostalCode);
    const countryIsVlid = !isEmpty(enteredCountry);

    setIsFormValid({
      userName: userNameIsVlid,
      email: emailIsVlid,
      password: passwordIsVlid,
      mobileNum: mobileNumIsVlid,
      address: addressIsVlid,
      city: cityIsVlid,
      postalCode: postalCodeIsVlid,
      country: countryIsVlid,
    });

    const formIsValid =
      userNameIsVlid &&
      emailIsVlid &&
      passwordIsVlid &&
      mobileNumIsVlid &&
      addressIsVlid &&
      cityIsVlid &&
      postalCodeIsVlid &&
      countryIsVlid;

    if (!formIsValid) {
      return;
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAaISA5Vy4eneIF0K23yVeOnn9_m95dMfQ",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed...!";

            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      })
      .then((data) => {
        fetch(
          `https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/userData/${data.localId}.json`,
          {
            method: "POST",
            body: JSON.stringify({
              userName: enteredUserName,
              email: enteredEmail,
              mobileNum: enteredMobileNumber,
              address: enteredAddress,
              city: enteredCity,
              postalCode: enteredPostalCode,
              country: enteredCountry,
            }),
          }
        );
        props.onLogin();
      });
  };

  return (
    <div className={classes.user_form}>
      <h1>Register</h1>
      <form className={classes.input}>
        <label htmlFor="username">UserName:</label>
        <input type="text" id="username" ref={userNameInputRef} />
        <label htmlFor="email">E-mail:</label>
        <input type="email" ref={emailInputRef} />
        <label htmlFor="tel">Mobile No:</label>
        <input type="tel" pattern="[0-9]{10}" ref={mobileNumberInputRef} />
        <label htmlFor="password">Password:</label>
        <input type="password" ref={passwordInputRef} />
        <label htmlFor="address">Address</label>
        <input type="text" ref={addressInputRef} />
        <section className={classes.citydata}>
          <section className={classes.city}>
            <label htmlFor="city">City</label>
            <input type="text" ref={cityInputRef} />
          </section>
          <section className={classes.postal}>
            <label htmlFor="postal">Postal Code</label>
            <input type="number" ref={postalCodeInputRef} />
          </section>
        </section>
        <label htmlFor="country">Country</label>
        <select id="country" name="country" ref={countryInputRef}>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Australia">Australia</option>
          <option value="Italy">Italy</option>
          <option value="South Korea">South Korea</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
        </select>
      </form>
      <div className={classes.actions}>
        <button
          className={classes.button}
          type="submit"
          onClick={submitHandler}
        >
          Sign Up
        </button>
      </div>
      <p onClick={props.onLogin}>Login with existing account.</p>
    </div>
  );
};

export default UserSignUpForm;
