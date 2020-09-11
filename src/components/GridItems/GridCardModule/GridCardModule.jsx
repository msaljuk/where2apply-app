import Grid from "@material-ui/core/Grid";
import React from "react";

import styles from "./GridCardModule.module.scss";

const GridCardModule = (props) => {
  const {
    headerText,
    headerTextStyle,
    imageSrc,
    imageStyle,
    role,
    subtitleText,
    subtitleTextStyle,
    textTheme,
  } = props;

  return (
    <Grid item xs={12} md={4}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            alt={`${headerText}`}
            className={styles.image}
            src={imageSrc}
            style={imageStyle}
          ></img>
        </div>
        <div
          className={
            textTheme === "black" ? styles.blackText : styles.whiteText
          }
        >
          <div className={styles.header} style={headerTextStyle}>
            {headerText}
          </div>
          <div className={styles.subtitle} style={subtitleTextStyle}>
            {subtitleText}
          </div>
          <div className={styles.role}>{role}</div>
        </div>
      </div>
    </Grid>
  );
};

export default GridCardModule;
