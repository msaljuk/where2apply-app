import React from "react";

import AreaTypeRadioButtons from "../../FormComponents/AreaTypeRadioButtons/AreaTypeRadioButtons";
import ClassSizeSlider from "../../FormComponents/ClassSizeSlider/ClassSizeSlider";
import USMap from "../../FormComponents/USMap/USMap";

import styles from "./PreferencesSection.module.scss";

const PreferencesSection = () => {
  return (
    <div className={styles.formFields}>
      <section className={styles.questionSection}>
        <div className={styles.fieldHeader}>1. Preferred Class Size</div>
        <div className={styles.sliderContainer}>
          <ClassSizeSlider />
        </div>
      </section>
      <section className={styles.questionSection}>
        <div className={styles.fieldHeader}>2. Preferred Area Type</div>
        <div className={styles.areaTypeContainer}>
          <AreaTypeRadioButtons />
        </div>
      </section>
      <section className={styles.questionSection}>
        <div className={styles.fieldHeader}>3. Preferred Location</div>
        <div className={styles.locationContainer}>
          <USMap />
        </div>
      </section>
    </div>
  );
};

export default PreferencesSection;
