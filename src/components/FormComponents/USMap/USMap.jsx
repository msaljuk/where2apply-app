import React from "react";
import USAMap from "react-usa-map";

import { statesCustomConfig } from "./utils";

const USMap = () => {
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  return (
    <USAMap
      customize={statesCustomConfig()}
      title={"College Locations in the US"}
      onClick={mapHandler}
    />
  );
};

export default USMap;
