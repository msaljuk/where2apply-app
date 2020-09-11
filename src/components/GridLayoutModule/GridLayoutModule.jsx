import Grid from "@material-ui/core/Grid";
import React from "react";

import styles from "./GridLayoutModule.module.scss";

const BLACK_THEME = "black";

const GridLayoutModule = (props) => {
  const { children, headerText, subtitleText, theme } = props;

  return (
    <div className={styles.container}>
      <div
        className={
          theme === BLACK_THEME ? styles.headerBlack : styles.headerWhite
        }
      >
        {headerText}
      </div>
      {subtitleText && (
        <div
          className={
            theme === BLACK_THEME ? styles.subtitleBlack : styles.subtitleWhite
          }
        >
          {subtitleText}
        </div>
      )}
      <div className={styles.grid}>
        <Grid container spacing={9}>
          {children}
        </Grid>
      </div>
    </div>
  );
};

export default GridLayoutModule;
