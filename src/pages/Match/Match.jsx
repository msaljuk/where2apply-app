import React, { useState } from "react";

import PreferencesSection from "../../components/FormSections/PreferencesSection/PreferencesSection";
import ProfileSection from "../../components/FormSections/ProfileSection/ProfileSection";
import ResultsSection from "../../components/FormSections/ResultsSection/ResultsSection";
import W2AProgressBar from "../../components/W2AProgressBar/W2AProgressBar";

import styles from "./Match.module.scss";

const PREFERENCES_STAGE = 0;
const PROFILE_STAGE = 50;
const RESULTS_STAGE = 100;

const Match = () => {
  const [progress, setProgress] = useState(PREFERENCES_STAGE);

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <W2AProgressBar amountAccomplished={progress} />
      </div>
      <div className={styles.formContainer}>
        {(() => {
          if (progress === PREFERENCES_STAGE) {
            return <PreferencesSection></PreferencesSection>;
          } else if (progress === PROFILE_STAGE) {
            return <ProfileSection></ProfileSection>;
          } else {
            return <ResultsSection></ResultsSection>;
          }
        })()}
      </div>
    </div>
  );
};

export default Match;
