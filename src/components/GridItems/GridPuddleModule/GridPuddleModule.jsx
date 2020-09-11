import React from "react";

import Grid from "@material-ui/core/Grid";

import styles from "./GridPuddleModule.module.scss";

const GridPuddleModule = (props) => {
  const {
    headerTextStyle,
    imageSrc,
    imageStyle,
    stepDescription,
    stepNumber,
    stepTitle,
    subtitleTextStyle,
    textTheme,
  } = props;

  return (
    <Grid item xs={12} md={4}>
      <div className={styles.puddleContainer}>
        <svg
          width="277"
          height="230"
          viewBox="0 0 277 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70.0522 229.82C-93.0607 -10.1687 64.2028 -23.8602 182.052 19.0202C450.14 116.566 60.916 99.0792 70.0522 229.82Z"
            fill="#FDF8F8"
          />
        </svg>
      </div>
      {stepNumber && <div className={styles.stepContainer}>{stepNumber}</div>}
      <div className={styles.stepImageContainer}>
        <img
          alt={`Step Number ${stepNumber}`}
          className={styles.stepImage}
          src={imageSrc}
          style={imageStyle}
        ></img>
      </div>
      <div
        className={textTheme === "black" ? styles.blackText : styles.whiteText}
      >
        <div className={styles.stepTitle} style={headerTextStyle}>
          {stepTitle}
        </div>
        <div className={styles.stepDescription} style={subtitleTextStyle}>
          {stepDescription}
        </div>
      </div>
    </Grid>
  );
};

export default GridPuddleModule;
