import React from "react";

import Ticker from "react-ticker";

import styles from "./CollegesTicker.module.scss";

const TICKER_MAX_SPEED = 6;
const TICKER_LEFT_OFFSET = "10%";
const TICKER_RIGHT_OFFSET = "70%";
const TICKER_DIRECTIONS = ["toLeft", "toRight"];

const NUMBER_OF_COLLEGES = 7;
const COLLEGES_LIST = [
  "Amherst",
  "Brown",
  "Bucknell",
  "Colby",
  "Columbia",
  "Cornell",
  "Dartmouth",
  "Emory",
  "F&M",
  "Grinnell",
  "Harvard",
  "Iowa State",
  "Knox",
  "Lafayette",
  "Pomona",
  "Princeton",
  "Stanford",
  "UMich",
  "UPenn",
  "Vassar",
  "Wesleyan",
  "Yale",
];

const NUMBER_OF_TICKER_STYLES = 4;

const getTickerClassName = () => {
  const tickerNumber = Math.floor(Math.random() * NUMBER_OF_TICKER_STYLES);

  switch (tickerNumber) {
    case 0:
      return styles.collegeNameHuge;
    case 1:
      return styles.collegeNameBig;
    case 2:
      return styles.collegeNameMedium;
    case 3:
      return styles.collegeNameSmall;
    default:
      return styles.collegeNameMedium;
  }
};

const CollegesTicker = () => {
  const shuffledCollegesList = COLLEGES_LIST.sort(() => 0.5 - Math.random());

  const collegesToDisplay = shuffledCollegesList.slice(0, NUMBER_OF_COLLEGES);

  return (
    <div className={styles.container}>
      {collegesToDisplay.map((college, index) => (
        <Ticker
          direction={
            index % NUMBER_OF_COLLEGES <= NUMBER_OF_COLLEGES / 2
              ? TICKER_DIRECTIONS[1]
              : TICKER_DIRECTIONS[0]
          }
          key={college}
          mode={"smooth"}
          offset={
            index % NUMBER_OF_COLLEGES <= NUMBER_OF_COLLEGES / 2
              ? TICKER_LEFT_OFFSET
              : TICKER_RIGHT_OFFSET
          }
          speed={Math.floor(Math.random() * TICKER_MAX_SPEED) + 1}
        >
          {() => (
            <>
              <div className={getTickerClassName()}>{college}</div>
            </>
          )}
        </Ticker>
      ))}
    </div>
  );
};

export default CollegesTicker;
