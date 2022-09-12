import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getSpecs } from "../../lib/api";

const specs = (props) => {
  const params = useParams();
  const { sendRequest, data: loadedSpecs } = useHttp(getSpecs, true);
  const { partId } = params;

  useEffect(() => {
    sendRequest(partId);
  }, [sendRequest, partId]);

  if (!loadedSpecs) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  const specs = loadedSpecs.map((spec) => <li key={spec}>{spec}</li>);

  return <div>{specs}</div>;
};

export default specs;