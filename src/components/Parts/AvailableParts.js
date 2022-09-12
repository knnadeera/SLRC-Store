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

  // useEffect(() => {
  //   const fetchParts = async () => {
  //     const response = await fetch(
  //       "https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/parts.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }

  //     const responseData = await response.json();

  //     const loadedData = [];

  //     for (const key in responseData) {
  //       loadedData.push({
  //         id: key,
  //         name: responseData[key].name,
  //         img: responseData[key].img,
  //         description: responseData[key].description,
  //         price: responseData[key].price,
  //       });
  //     }
  //     setParts(loadedData);
  //     setIsLoading(false);
  //   };
  //   fetchParts().catch((error) => {
  //     setIsLoading(false);
  //     setIsError(error.message);
  //   });
  // });

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p className={classes.loading}>Loading....</p>
  //     </section>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <section>
  //       <p className={classes.haserror}>{isError}</p>
  //     </section>
  //   );
  // }



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
