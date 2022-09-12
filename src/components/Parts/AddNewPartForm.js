import React, { Fragment, useRef, useState } from "react";
import classes from "./AddNewPartForm.module.css";

const AddNewPartForm = (props) => {
  const [specInputs, setSpecInputs] = useState([{ spec: "" }]);
  const [includeInputs, setIncludeInputs] = useState([{ include: "" }]);
  const nameInputRef = useRef();
  const imgInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();
  const fullDescriptionInputRef = useRef();

  const submitHandler = () => {
    const enteredName = nameInputRef.current.value;
    const enteredImg = imgInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredFullDescription = fullDescriptionInputRef.current.value;

    const price = Number(enteredPrice);

    props.onAddNewPart({
      name: enteredName,
      img: enteredImg,
      price: price,
      description: enteredDescription,
      fullDescription: enteredFullDescription,
      specifications: { specInputs },
      includes: { includeInputs },
    });
  };

  const specChangeHandler = (index, event) => {
    const values = [...specInputs];
    values[index] = event.target.value;
    setSpecInputs(values);
  };

  const includeChangeHandler = (index, event) => {
    const values = [...includeInputs];
    values[index] = event.target.value;
    setIncludeInputs(values);
  };

  const specAddHandler = () => {
    setSpecInputs([...specInputs, { spec: "" }]);
  };

  const includeAddHandler = () => {
    setIncludeInputs([...includeInputs, { include: "" }]);
  };

  const spec = specInputs.map((specInputField, index) => (
    <div key={index} className={classes.add}>
      <input
        value={specInputField.value}
        onChange={(event) => specChangeHandler(index, event)}
      />
      <button onClick={specAddHandler}>Add Spec</button>
    </div>
  ));

  const incld = includeInputs.map((includeInputField, index) => (
    <div key={index} className={classes.add}>
      <input
        value={includeInputField.value}
        onChange={(event) => includeChangeHandler(index, event)}
      />
      <button onClick={includeAddHandler}>Add Include</button>
    </div>
  ));

  return (
    <Fragment>
      <div className={classes.new_part}>
        <section className={classes.main}>
          <label htmlFor="Name">Name</label>
          <input type="text" ref={nameInputRef}></input>
          <label htmlFor="Image">Image</label>
          <input type="url" ref={imgInputRef} />
          <label htmlFor="Price">Price</label>
          <input type="number" ref={priceInputRef}></input>
          <label htmlFor="Description">Description</label>
          <textarea type="text" ref={descriptionInputRef} />
          <label htmlFor="Full Description">Full Description</label>
          <textarea type="text" ref={fullDescriptionInputRef} />
        </section>
        <section>
          <div>
            <label>Specifications</label>
            {spec}
          </div>
          <div>
            <label>Includes</label>
            {incld}
          </div>
        </section>
        <button onClick={submitHandler} className={classes.post}>Post</button>
      </div>
    </Fragment>
  );
};

export default AddNewPartForm;
