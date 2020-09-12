import { Grid, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";

import { FormDispatch, FormState } from "../../../pages/Match/Match";

import styles from "./ProfileSection.module.scss";

const MIN_SAT_COMPONENT_SCORE = 200;
const MAX_SAT_COMPONENT_SCORE = 800;

const MIN_GPA = 0;
const MAX_GPA = 4.0;

const ProfileSection = (props) => {
  const { errorPresent, setErrorPresent } = props;

  const [satVRError, setSATVRError] = useState(false);
  const [satMTError, setSATMTError] = useState(false);
  const [gpaError, setGPAError] = useState(false);

  const state = useContext(FormState);
  const dispatch = useContext(FormDispatch);

  useEffect(() => {
    if (satVRError || satMTError || gpaError) {
      if (!errorPresent) {
        setErrorPresent(true);
      }
    } else {
      if (errorPresent) {
        setErrorPresent(false);
      }
    }
  }, [errorPresent, gpaError, satVRError, satMTError, setErrorPresent]);

  const handleSATVRChange = (event) => {
    dispatch({ type: "sat_vr", payload: parseInt(event.target.value) });
  };
  const handleSATMathChange = (event) => {
    dispatch({ type: "sat_mt", payload: parseInt(event.target.value) });
  };
  const handleGPAChange = (event) => {
    dispatch({ type: "gpa", payload: event.target.value });
  };

  const isSATVRError = (score) => {
    if (score < MIN_SAT_COMPONENT_SCORE || score > MAX_SAT_COMPONENT_SCORE) {
      if (!satVRError) {
        setSATVRError(true);
      }
      return true;
    } else {
      if (satVRError) {
        setSATVRError(false);
      }

      return false;
    }
  };
  const isSATMTError = (score) => {
    if (score < MIN_SAT_COMPONENT_SCORE || score > MAX_SAT_COMPONENT_SCORE) {
      if (!satMTError) {
        setSATMTError(true);
      }
      return true;
    } else {
      if (satMTError) {
        setSATMTError(false);
      }

      return false;
    }
  };
  const isGPAError = (gpa) => {
    if (gpa === "" || gpa < MIN_GPA || gpa > MAX_GPA) {
      if (!gpaError) {
        setGPAError(true);
      }
      return true;
    } else {
      if (gpaError) {
        setGPAError(false);
      }

      return false;
    }
  };

  return (
    <div className={styles.profileInnerContainer}>
      <section className={styles.questionSection}>
        <div className={styles.fieldHeader}>SAT I Score</div>
        <div className={styles.fieldDescription}>
          Enter your SAT 1 English (Reading + Writing) and Math Scores
        </div>
        <div className={styles.fieldsContainer}>
          <Grid container spacing={5}>
            <Grid item xs={6} md={3}>
              <span className={styles.inputFieldDescription}>
                SAT 1 English
              </span>
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                error={isSATVRError(state.sat_vr)}
                helperText={"SAT Score must be b/w 200 and 800"}
                onChange={handleSATVRChange}
                type="Number"
                placeholder="200 - 800"
                value={state.sat_vr}
                variant="filled"
              />
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={6} md={3}>
              <span className={styles.inputFieldDescription}>SAT 1 Math</span>
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                error={isSATMTError(state.sat_mt)}
                helperText={"SAT Score must be b/w 200 and 800"}
                onChange={handleSATMathChange}
                type="Number"
                placeholder="200 - 800"
                value={state.sat_mt}
                variant="filled"
              />
            </Grid>
          </Grid>
        </div>
      </section>
      <section className={styles.questionSection}>
        <div className={styles.fieldHeader}>Highschool GPA</div>
        <div className={styles.fieldDescription}>Enter your highschool GPA</div>
        <div className={styles.fieldsContainer}>
          <div className={styles.fieldContainer}>
            <Grid container spacing={5}>
              <Grid item xs={6} md={3}>
                <span className={styles.inputFieldDescription}>GPA</span>
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  error={isGPAError(state.gpa)}
                  helperText={"GPA must be between 0 and 4.0"}
                  onChange={handleGPAChange}
                  type={String}
                  placeholder="0 - 4.0"
                  value={state.gpa}
                  variant="filled"
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileSection;
