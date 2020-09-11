import Grid from "@material-ui/core/Grid";
import React from "react";

import styles from "./Footer.module.scss";

const APP_VERSION = "v1.0";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <div className={styles.logo}>where2apply</div>
          <div className={styles.version}>{`2020 ${APP_VERSION}`}</div>
        </Grid>
        <Grid item md={8}>
          <div className={styles.disclaimer}>
            where2apply is a student-run project. It is meant to act as an
            advisory guide and its results are not binding.
          </div>
          <div className={styles.suggestion}>
            Have some ideas to better the tool? Reach out to us at{" "}
            <a
              className={styles.emailLink}
              href="mailto: where2apply@gmail.com"
            >
              where2apply@gmail.com
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
