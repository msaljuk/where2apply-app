import {
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useContext } from "react";

import { FormDispatch, FormState } from "../../../pages/Match/Match";

import styles from "./AreaTypeRadioButtons.module.scss";

const NUM_ITEMS_PER_GRID = 6;

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

const AreaTypeRadioButtons = () => {
  const state = useContext(FormState);
  const dispatch = useContext(FormDispatch);

  const onCheck = (event) => {
    dispatch({
      type: "ur_pref",
      payload: event.target.value,
    });
  };

  return (
    <div className={styles.areaTypeInnerContainer}>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="area-type"
          name="ur_pref"
          value={state.ur_pref}
          onChange={onCheck}
        >
          <Grid container spacing={5}>
            <Grid classes={{ root: styles.fullGrid }} item xs={12} md={6}>
              {areaTypes.slice(0, NUM_ITEMS_PER_GRID).map((areaType) => {
                return (
                  <div>
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
                  </div>
                );
              })}
            </Grid>
            <Grid classes={{ root: styles.fullGrid }} item xs={12} md={6}>
              {areaTypes
                .slice(NUM_ITEMS_PER_GRID, areaTypes.length)
                .map((areaType) => {
                  return (
                    <div>
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
                    </div>
                  );
                })}
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default AreaTypeRadioButtons;
