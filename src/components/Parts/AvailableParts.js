import React, { Fragment, useEffect, useState } from "react";
import classes from "./AvailableParts.module.css";
import PartItems from "./PartsItems/PartItems";

const AvailableParts = (props) => {
  const [parts, setParts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchParts = async () => {
      const response = await fetch(
        "https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/parts.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedData = [];

      for (const key in responseData) {
        loadedData.push({
          id: key,
          name: responseData[key].name,
          img: responseData[key].img,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setParts(loadedData);
      setIsLoading(false);
    };
    fetchParts().catch((error) => {
      setIsLoading(false)
      setIsError(error.message);
    });
  });

  if (isLoading) {
    return (
      <section>
        <p className={classes.loading}>Loading....</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section>
        <p className={classes.haserror}>{isError}</p>
      </section>
    );
  }

  const partList = parts.map((parts) => (
    <PartItems
      key={parts.id}
      id={parts.id}
      name={parts.name}
      description={parts.description}
      img={parts.img}
      price={parts.price}
      // specifications={part.specifications}
      // onClick={props.onClick}
    />
  ));

  return (
    <Fragment>
      <section className={classes.parts}>
        <ul>{partList}</ul>
      </section>
    </Fragment>
  );
};

export default AvailableParts;
