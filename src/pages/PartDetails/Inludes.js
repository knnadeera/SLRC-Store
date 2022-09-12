import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getIncludes } from "../../lib/api";

const Includes = (props) => {
  const params = useParams();
  const { sendRequest, data: loadedIncludes } = useHttp(getIncludes, true);
  const { partId } = params;

  useEffect(() => {
    sendRequest(partId);
  }, [sendRequest, partId]);

  if (!loadedIncludes) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  const includes = loadedIncludes.map((include) => <li key={include}>{include}</li>);

  return <div>{includes}</div>;
};

export default Includes;
