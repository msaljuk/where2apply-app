import { Grid, TextField } from "@material-ui/core";
import React from "react";

import styles from "./ProfileSection.module.scss";

const ProfileSection = () => {
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
              <TextField type="Number" placeholder="0 - 800" variant="filled" />
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={6} md={3}>
              <span className={styles.inputFieldDescription}>SAT 1 Math</span>
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField type="Number" placeholder="0 - 800" variant="filled" />
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
                  type="Number"
                  placeholder="0 - 4.0"
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
