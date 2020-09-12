import React, { useContext } from "react";
import { Slider } from "@material-ui/core";

import { FormDispatch, FormState } from "../../../pages/Match/Match";

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
  const state = useContext(FormState);
  const dispatch = useContext(FormDispatch);

  const onSliderChange = (event, newValue) => {
    dispatch({ type: "class_size", payload: newValue });
  };

  return (
    <Slider
      classes={{
        root: styles.sliderColor,
        markLabel: styles.sliderLabel,
      }}
      getAriaValueText={(value) => value}
      aria-labelledby="class-size-slider"
      onChange={onSliderChange}
      step={50}
      value={parseInt(state.class_size)}
      valueLabelDisplay="auto"
      min={50}
      max={2000}
      marks={classSizeMarks}
    />
  );
};

export default ClassSizeSlider;
