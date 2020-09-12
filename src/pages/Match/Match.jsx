import React, { useState } from "react";

import Button from "../../components/Button/Button";
import PreferencesSection from "../../components/FormSections/PreferencesSection/PreferencesSection";
import ProfileSection from "../../components/FormSections/ProfileSection/ProfileSection";
import ResultsSection from "../../components/FormSections/ResultsSection/ResultsSection";
import W2AProgressBar from "../../components/W2AProgressBar/W2AProgressBar";

import styles from "./Match.module.scss";

const PREFERENCES_PAGE = "Preferences";
const PREFERENCES_STAGE = 0;
const PROFILE_PAGE = "Profile";
const PROFILE_STAGE = 50;
const RESULTS_PAGE = "Results";
const RESULTS_STAGE = 100;

const Match = () => {
  const [currentPage, setCurrentPage] = useState(PREFERENCES_PAGE);
  const [progress, setProgress] = useState(PREFERENCES_STAGE);

  const moveToPreferencesPage = () => {
    setCurrentPage(PREFERENCES_PAGE);
    setProgress(PREFERENCES_STAGE);
    window.scrollTo(0, 0);
  };

  const moveToProfilePage = () => {
    setCurrentPage(PROFILE_PAGE);
    setProgress(PROFILE_STAGE);
    window.scrollTo(0, 0);
  };

  const moveToResultsPage = () => {
    setCurrentPage(RESULTS_PAGE);
    setProgress(RESULTS_STAGE);
    window.scrollTo(0, 0);
  };

  const nextButtonHandler = () => {
    if (currentPage === PREFERENCES_PAGE) {
      moveToProfilePage();
    } else if (currentPage === PROFILE_PAGE) {
      moveToResultsPage();
    }
  };

  const backButtonHandler = () => {
    if (currentPage === PROFILE_PAGE) {
      moveToPreferencesPage();
    }
  };

  const retryButtonHandler = () => {
    moveToPreferencesPage();
  };

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <W2AProgressBar
          amountAccomplished={progress}
          onPreferencesClick={moveToPreferencesPage}
          onProfileClick={moveToProfilePage}
        />
      </div>
      <div className={styles.formContainer}>
        {(() => {
          if (currentPage === PREFERENCES_PAGE) {
            return <PreferencesSection />;
          } else if (currentPage === PROFILE_PAGE) {
            return <ProfileSection />;
          } else {
            return <ResultsSection />;
          }
        })()}
      </div>
      <div className={styles.buttonListContainer}>
        {currentPage === PROFILE_PAGE && (
          <span className={styles.buttonContainer}>
            <Button buttonText={"Back"} onClick={backButtonHandler}></Button>
          </span>
        )}
        {currentPage !== RESULTS_PAGE ? (
          <span className={styles.buttonContainer}>
            <Button buttonText={"Next"} onClick={nextButtonHandler}></Button>
          </span>
        ) : (
          <Button
            buttonText={"New Search"}
            onClick={retryButtonHandler}
          ></Button>
        )}
      </div>
    </div>
  );
};

export default Match;
