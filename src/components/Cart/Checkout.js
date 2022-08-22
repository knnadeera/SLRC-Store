import React, { useState, useRef } from "react";
import classes from "./Checkout.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../Store/cart-slice";

const isEmpty = (value) => value.trim().length === 0;
const isPostalCode = (value) => value.trim().length === 5;
const isPhoneNumber = (value) => value.trim().length > 10;

const Checkout = (props) => {
  // const dispatch = useDispatch();

  const [phoneValue, setPhoneValue] = useState();
  const [formInputValidity, setFormInputValidity] = useState({
    firstName: true,
    lastName: true,
    address: true,
    city: true,
    postalCode: true,
    phoneNumber: true,
  });

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressLine1InputRef = useRef();
  const addressLine2InputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const ChechoutHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredAddress =
      addressLine1InputRef.current.value || addressLine2InputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isPostalCode(enteredPostalCode);
    const enteredPhoneNumberIsValid = isPhoneNumber(enteredPhoneNumber);

    setFormInputValidity({
      firstName: enteredFirstNameIsValid,
      lastName: enteredLastNameIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
      phoneNumber: enteredPhoneNumberIsValid,
    });

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid &&
      enteredPhoneNumberIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      address: enteredAddress,
      city: enteredCity,
      postalCode: enteredPostalCode,
      phoneNumber: enteredPhoneNumber,
    });
    // dispatch(cartActions.checkoutCart());
  };

  const firstNameInvalidClasses = `${classes.control} ${
    formInputValidity.firstName ? "" : classes.invalid
  }`;

  const lastNameInvalidClasses = `${classes.control} ${
    formInputValidity.lastName ? "" : classes.invalid
  }`;

  const AddressInvalidClasses = `${classes.control} ${
    formInputValidity.address ? "" : classes.invalid
  }`;

  const cityInvalidClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  const postslCodeInvalidClasses = `${classes.control} ${
    formInputValidity.postalCode ? "" : classes.invalid
  }`;

  const phoneNumberInvalidClasses = `${classes.control} ${
    formInputValidity.phoneNumber ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={ChechoutHandler}>
      <section className={classes.names}>
        <div className={firstNameInvalidClasses}>
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" ref={firstNameInputRef} />
          {!formInputValidity.firstName && <p>Please Enter the First Name</p>}
        </div>
        <div className={lastNameInvalidClasses}>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" ref={lastNameInputRef} />
          {!formInputValidity.lastName && <p>Please Enter the Last Name</p>}
        </div>
      </section>
      <section className={classes.address}>
        <div className={AddressInvalidClasses}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="street_address1"
            placeholder="House Number"
            ref={addressLine1InputRef}
          />
          <input
            type="text"
            id="street_address2"
            placeholder="Street Name"
            ref={addressLine2InputRef}
          />
          {!formInputValidity.address && <p>Please Enter the Address</p>}
        </div>
      </section>
      <section className={classes.names}>
        <div className={cityInvalidClasses}>
          <label htmlFor="city">Town/City</label>
          <input type="text" id="city" ref={cityInputRef} />
          {!formInputValidity.city && <p>Please Enter the City</p>}
        </div>
        <div className={postslCodeInvalidClasses}>
          <label htmlFor="postal_code">Postal Code/Zip</label>
          <input type="number" id="postal_code" ref={postalCodeInputRef} />
          {!formInputValidity.postalCode && <p>Please Enter the Postal Code</p>}
        </div>
      </section>
      <div className={phoneNumberInvalidClasses}>
        <label htmlFor="phone_number">Phone Number</label>
        <PhoneInput
          className={classes.phn_control}
          type="tel"
          id="phone_number"
          placeholder="Enter phone number"
          value={phoneValue}
          onChange={setPhoneValue}
          ref={phoneNumberInputRef}
        />
        {!formInputValidity.phoneNumber && <p>Please Enter the Phone Number</p>}
      </div>
      <div className={classes.action}>
        <button type="button" className={classes.close} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.checkout}>Checkout</button>
      </div>
    </form>
  );
};

export default Checkout;
