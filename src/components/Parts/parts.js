import React, { useEffect } from "react";
import AvailableParts from "./AvailableParts";
import useHttp from "../../hooks/use-http";
import { getAllParts } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const Parts = (props) => {
  const {
    sendRequest,
    status,
    data: loadedParts,
    error,
  } = useHttp(getAllParts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  return (
    <div>
      <AvailableParts parts={loadedParts} />
    </div>
  );
};

export default Parts;
