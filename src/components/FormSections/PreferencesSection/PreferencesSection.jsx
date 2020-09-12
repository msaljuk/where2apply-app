import React from "react";

import AreaTypeRadioButtons from "../../FormComponents/AreaTypeRadioButtons/AreaTypeRadioButtons";
import ClassSizeSlider from "../../FormComponents/ClassSizeSlider/ClassSizeSlider";
import LocationSorter from "../../FormComponents/LocationSorter/LocationSorter";

import styles from "./PreferencesSection.module.scss";

const PreferencesSection = () => {
  return (
    <div className={styles.formFields}>
      <section className={styles.questionSection}>
        <div className={styles.fieldHeader}>1. Preferred Class Size</div>
        <div className={styles.fieldDescription}>
          Choose the number of students you would ideally want in your class
        </div>
        <div className={styles.sliderContainer}>
          <ClassSizeSlider />
        </div>
      </section>
      <section className={styles.questionSection}>
        <div className={styles.fieldHeader}>2. Preferred Area Type</div>
        <div className={styles.fieldDescription}>
          Select the Area Type you would like your college to be in
        </div>
        <div className={styles.areaTypeContainer}>
          <AreaTypeRadioButtons />
        </div>
      </section>
      <section className={styles.questionSection}>
        <div className={styles.fieldHeader}>3. Preferred Location</div>
        <div className={styles.fieldDescription}>
          Use the US Map Key to sort college regions by your preference below
        </div>
        <div className={styles.locationContainer}>
          <LocationSorter />
        </div>
      </section>
    </div>
  );
};

export default PreferencesSection;
