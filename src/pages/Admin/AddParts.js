import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddNewPartForm from "../../components/Parts/AddNewPartForm";
import useHttp from "../../hooks/use-http";
import { addNewPart } from "../../lib/api";

const AddParts = (props) => {
  const { sendRequest, status } = useHttp(addNewPart);
  const history = useHistory()

  useEffect(() => {
    if (status === "completed") {
      history.push("/");
    }
  }, [status, history]);

  const newPartAddHandler = (newPartData) => {
    sendRequest(newPartData);

    history.push("/");
  };


  return (
    <Fragment>
      <AddNewPartForm onAddNewPart={newPartAddHandler} />
    </Fragment>
  );
};

export default AddParts;
