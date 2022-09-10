import React, { useRef } from "react";

const AddNewPartForm = (props) => {
  const nameInputRef = useRef();
  const imgInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();
  const fullDescriptionInputRef = useRef();

  const submitHandler = (event) => {
    // event.preventDefault()
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
    });
  };

  return (
    <form onSubmit={submitHandler}>
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
      <button>Post</button>
    </form>
  );
};

export default AddNewPartForm;
