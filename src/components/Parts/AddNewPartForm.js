import React, { Fragment, useRef, useState } from "react";
// import SpecInputs from "./SpecInputs";

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
      specification: { specInputs },
      includes: { includeInputs },
    });
  };

  const specChangeHandler = (index, event) => {
    const values = [...specInputs];
    values[index] = event.target.value;
    setSpecInputs(values);
    console.log(index);
  };

  const includeChangeHandler = (index, event) => {
    const values = [...includeInputs];
    values[index] = event.target.value;
    setIncludeInputs(values);
    console.log(index);
  };

  const specAddHandler = () => {
    setSpecInputs([...specInputs, { spec: "" }]);
  };

  const includeAddHandler = () => {
    setIncludeInputs([...includeInputs, { include: "" }]);
  };

  return (
    <Fragment>
      <section>
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
      <div>
        <h4>Specifications</h4>
        {specInputs.map((specInputField, index) => (
          <div key={index}>
            <input
              value={specInputField.value}
              onChange={(event) => specChangeHandler(index, event)}
            />
            <button onClick={specAddHandler}>Add Spec</button>
          </div>
        ))}
      </div>
      <div>
        <h4>Includes</h4>
        {includeInputs.map((includeInputField, index) => (
          <div key={index}>
            <input
              value={includeInputField.value}
              onChange={(event) => includeChangeHandler(index, event)}
            />
            <button onClick={includeAddHandler}>Add Include</button>
          </div>
        ))}
      </div>
      <button onClick={submitHandler}>Post</button>
    </Fragment>
  );
};

export default AddNewPartForm;
