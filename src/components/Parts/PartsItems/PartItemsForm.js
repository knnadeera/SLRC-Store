import React from "react";
import classes from "./PartItemsForm.module.css";

const PartItemsForm = (props) => {
  // const [amountIsValid, setAmountIsValid] = useState(true);
  // const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // const enteredAmount = amountInputRef.current.value;
    // const enteredAmountNumber = +enteredAmount;

    // if (
    //   enteredAmount.trim().length === 0 ||
    //   enteredAmountNumber < 1 ||
    //   enteredAmountNumber > 5
    // ) {
    //   // setAmountIsValid(false);
    //   return;
    // }
    props.onAddToCart();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* <Input
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      /> */}
      
      <button>Add to Cart</button>
      {/* {!amountIsValid && <p>Please enter valid amount</p>} */}
    </form>
  );
};

export default PartItemsForm;