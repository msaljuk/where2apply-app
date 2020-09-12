import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";

import styles from "./ResultsSection.module.scss";

const LOADER_COLOR = "#6484f5";

const ResultsSection = (props) => {
  const { collegeList, isAlgorithmError, isLoading } = props;

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader type="Oval" color={LOADER_COLOR} height={100} width={100} />
        <div className={styles.loaderLabel}>Running the algorithm</div>
      </div>
    );
  }

  if (isAlgorithmError) {
    return (
      <div className={styles.algorithmError}>
        <div className={styles.algorithmErrorText}>
          Oops. Sorry about that. We ran into some issues. Please try again.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.collegeList}>
      <div className={styles.header}>Your Ideal College List</div>
      {collegeList.map((college) => {
        return (
          <div className={styles.college} key={college}>
            {college}
          </div>
        );
      })}
    </div>
  );
};

ResultsSection.defaultProps = {
  collegeList: [],
};

export default ResultsSection;
