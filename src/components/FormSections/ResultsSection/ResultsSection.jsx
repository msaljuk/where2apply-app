import React from "react";

import styles from "./ResultsSection.module.scss";

const ResultsSection = (props) => {
  const { colleges } = props;

  return (
    <div className={styles.collegeList}>
      <div className={styles.header}>Your Ideal College List</div>
      {colleges.map((college) => {
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
  colleges: [
    "Stanford University",
    "University Of Miami",
    "Claremont Mckenna College",
    "Bucknell University",
    "Oberlin College",
    "Denison University",
    "Occidental College",
    "University Of The Pacific",
    "Colorado College",
    "Furman University",
    "University Of Puget Sound",
    "Lewis & Clark College",
    "Lawrence University",
    "Hampshire College",
    "Endicott College",
  ],
};

export default ResultsSection;
