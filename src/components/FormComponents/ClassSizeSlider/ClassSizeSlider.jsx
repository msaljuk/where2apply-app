import React from "react";
import { Slider } from "@material-ui/core";

import styles from "./ClassSizeSlider.module.scss";

const classSizeMarks = [
  {
    value: 100,
    label: "Small",
  },
  {
    value: 500,
    label: "Moderate",
  },
  {
    value: 1000,
    label: "Average",
  },
  {
    value: 1500,
    label: "Large",
  },
  {
    value: 2000,
    label: "Very Large",
  },
];

const ClassSizeSlider = () => {
  return (
    <Slider
      classes={{
        root: styles.sliderColor,
        markLabel: styles.sliderLabel,
      }}
      defaultValue={500}
      getAriaValueText={(value) => value}
      aria-labelledby="class-size-slider"
      step={50}
      valueLabelDisplay="auto"
      min={50}
      max={2000}
      marks={classSizeMarks}
    />
  );
};

export default ClassSizeSlider;
