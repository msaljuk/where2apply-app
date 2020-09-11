import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import styles from "./AreaTypeRadioButtons.module.scss";

const areaTypes = [
  "City: Large",
  "City: Midsize",
  "City: Small",
  "Rural: Distant",
  "Rural: Fringe",
  "Rural: Remote",
  "Suburb: Large",
  "Suburb: Midsize",
  "Suburb: Small",
  "Town: Distant",
  "Town: Fringe",
  "Town: Remote",
];

const areaTypesToBackendNumber = {
  "City: Large": 11,
  "City: Midsize": 10,
  "City: Small": 9,
  "Rural: Distant": 1,
  "Rural: Fringe": 2,
  "Rural: Remote": 0,
  "Suburb: Large": 8,
  "Suburb: Midsize": 7,
  "Suburb: Small": 6,
  "Town: Distant": 4,
  "Town: Fringe": 5,
  "Town: Remote": 3,
};

const AreaTypeRadioButtons = () => {
  const [value, setValue] = useState("City: Large");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="area-type"
        name="ur_pref"
        value={value}
        onChange={handleChange}
      >
        {areaTypes.map((areaType) => {
          return (
            <FormControlLabel
              classes={{ label: styles.label }}
              value={areaType}
              control={
                <Radio
                  classes={{
                    root: styles.radioButton,
                  }}
                />
              }
              label={areaType}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default AreaTypeRadioButtons;
