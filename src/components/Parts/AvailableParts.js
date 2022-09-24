import React, { Fragment } from "react";
import classes from "./AvailableParts.module.css";
import PartItems from "./PartsItems/PartItems";
import { useHistory, useLocation } from "react-router-dom";

const sortParts = (parts, ascending) => {
  return parts.sort((partA, partB) => {
    if (ascending) {
      return partA.price < partB.price ? 1 : -1;
    } else {
      return partA.price > partB.price ? 1 : -1;
    }
  });
};

const AvailableParts = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "high-low";

  const isSorting = queryParams.get("sort");

  const sortedParts = sortParts(props.parts, isSortingAscending);

  const changeSortingHandler = () => {
    history.push(
      "/parts?sort=" + (isSortingAscending ? "low-high" : "high-low")
    );
  };

  const partList = sortedParts.map((parts) => (
    <PartItems
      key={parts.id}
      id={parts.id}
      name={parts.name}
      description={parts.description}
      img={parts.img}
      price={parts.price}
      // specifications={part.specifications}
    />
  ));

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Show {isSortingAscending ? "Low to High" : "High to Low"}
        </button>
        {isSorting && (
          <h4 onClick={changeSortingHandler}>
            Sort by: {isSortingAscending ? "High to Low" : "Low to High"} List
          </h4>
        )}
      </div>

      <section className={classes.parts}>
        <ul>{partList}</ul>
      </section>
    </Fragment>
  );
};

export default AvailableParts;
