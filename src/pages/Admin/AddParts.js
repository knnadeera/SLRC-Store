import React, { Fragment, useState } from "react";
import AddNewPartForm from "../../components/Parts/AddNewPartForm";
import useHttp from "../../hooks/use-http";
// import { addPart } from "../../lib/api";

const AddParts = (props) => {
  useHttp()
  // const [specInputs, isSpecInputs] = useState([{ key: "", spec: "" }]);

  // const specInputShowHandler = () => {
  //   isSpecInputs([...specInputs, { key: "", spec: "" }]);
  // };

  const newPartAddHandler = (newPartDdata) => {

  };

  return (
    <Fragment>
      <AddNewPartForm onAddNewPart={newPartAddHandler} />
    </Fragment>
  );
};

export default AddParts;
