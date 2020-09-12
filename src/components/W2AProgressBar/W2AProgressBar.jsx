import classnames from "classnames";
import React from "react";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import styles from "./W2AProgressBar.module.scss";

const JADE_BLUE_COLOR = "#6484f5";
const CODE_GREEN_COLOR = "#4feb97";

const PROGRESS_COMPLETED = 100;

const W2AProgressBar = (props) => {
  const {
    amountAccomplished,
    isAlgorithmError,
    isLoading,
    onPreferencesClick,
    onProfileClick,
  } = props;

  const completed =
    amountAccomplished === PROGRESS_COMPLETED && !isLoading & !isAlgorithmError;

  return (
    <ProgressBar
      percent={amountAccomplished}
      filledBackground={completed ? CODE_GREEN_COLOR : JADE_BLUE_COLOR}
    >
      <Step transition="scale">
        {({ accomplished }) => (
          <div
            className={classnames(styles.stepContainer, {
              [styles.clickable]: accomplished,
            })}
            onClick={accomplished ? onPreferencesClick : {}}
          >
            <div
              className={classnames(styles.checkpoint, {
                [styles.accomplishedCheckpoint]: accomplished,
                [styles.completed]: completed,
              })}
            ></div>
            <div
              className={classnames(styles.stepLabel, styles.preferencesLabel, {
                [styles.accomplishedLabel]: accomplished,
              })}
            >
              Preferences
            </div>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div
            className={classnames(styles.stepContainer, {
              [styles.clickable]: accomplished,
            })}
            onClick={accomplished ? onProfileClick : {}}
          >
            <div
              className={classnames(styles.checkpoint, {
                [styles.accomplishedCheckpoint]: accomplished,
                [styles.completed]: completed,
              })}
            ></div>
            <div
              className={classnames(styles.stepLabel, {
                [styles.accomplishedLabel]: accomplished,
              })}
            >
              Profile
            </div>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div className={styles.stepContainer}>
            <div
              className={classnames(styles.checkpoint, {
                [styles.accomplishedCheckpoint]: accomplished,
                [styles.completed]: completed,
              })}
            ></div>
            <div
              className={classnames(styles.stepLabel, {
                [styles.accomplishedLabel]: accomplished,
              })}
            >
              Results
            </div>
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

W2AProgressBar.defaultProps = {
  amountAccomplished: 0,
  isLoading: false,
};

export default W2AProgressBar;
