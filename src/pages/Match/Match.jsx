import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

import Button from "../../components/Button/Button";
import PreferencesSection from "../../components/FormSections/PreferencesSection/PreferencesSection";
import ProfileSection from "../../components/FormSections/ProfileSection/ProfileSection";
import ResultsSection from "../../components/FormSections/ResultsSection/ResultsSection";
import W2AProgressBar from "../../components/W2AProgressBar/W2AProgressBar";

import { prepareData } from "./utils.js";

import styles from "./Match.module.scss";

const API_ENDPOINT =
  "http://where2apply-api.herokuapp.com/api/v1/colleges/list";

const PREFERENCES_PAGE = "Preferences";
const PREFERENCES_STAGE = 0;
const PROFILE_PAGE = "Profile";
const PROFILE_STAGE = 50;
const RESULTS_PAGE = "Results";
const RESULTS_STAGE = 100;

const initialState = {
  class_size: 500,
  ur_pref: "City: Large",
  sat_vr: "",
  sat_mt: "",
  gpa: "",
  region_dic: {
    "Far West": "Neutral",
    "New England": "Neutral",
    "Mid East": "Neutral",
    Southeast: "Neutral",
    Plains: "Neutral",
    "Great Lakes": "Neutral",
    Southwest: "Neutral",
    "Rocky Mountains": "Neutral",
  },
};

const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === "reset") {
    return { ...initialState };
  }

  return { ...state, [type]: payload };
};

export const FormDispatch = createContext(null);
export const FormState = createContext(null);

const Match = () => {
  const [formState, dispatch] = useReducer(reducer, initialState);

  const [retrievedCollegeList, setRetrievedCollegeList] = useState([]);

  const [currentPage, setCurrentPage] = useState(PREFERENCES_PAGE);
  const [progress, setProgress] = useState(PREFERENCES_STAGE);

  const [isAlgorithmError, setAlgorithmError] = useState(false);
  const [isFormError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const runW2AAlgorithm = () => {
    setIsLoading(true);

    const requestBody = prepareData(formState);
    console.log(requestBody);

    axios
      .post(API_ENDPOINT, requestBody)
      .then((res) => {
        setIsLoading(false);
        setRetrievedCollegeList(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setAlgorithmError(true);
      });
  };

  const moveToPreferencesPage = () => {
    setCurrentPage(PREFERENCES_PAGE);
    setProgress(PREFERENCES_STAGE);
    setFormError(false);
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
    runW2AAlgorithm();
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
    dispatch({ type: "reset" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <W2AProgressBar
          amountAccomplished={progress}
          isLoading={isLoading}
          onPreferencesClick={moveToPreferencesPage}
          onProfileClick={moveToProfilePage}
        />
      </div>

      <FormState.Provider value={formState}>
        <FormDispatch.Provider value={dispatch}>
          <div className={styles.formContainer}>
            {(() => {
              if (currentPage === PREFERENCES_PAGE) {
                return <PreferencesSection />;
              } else if (currentPage === PROFILE_PAGE) {
                return (
                  <ProfileSection
                    errorPresent={isFormError}
                    setErrorPresent={setFormError}
                  />
                );
              } else {
                return (
                  <ResultsSection
                    collegeList={retrievedCollegeList}
                    isAlgorithmError={isAlgorithmError}
                    isLoading={isLoading}
                  />
                );
              }
            })()}
          </div>
        </FormDispatch.Provider>
      </FormState.Provider>

      <div className={styles.buttonListContainer}>
        {currentPage === PROFILE_PAGE && (
          <span className={styles.buttonContainer}>
            <Button buttonText={"Back"} onClick={backButtonHandler}></Button>
          </span>
        )}
        {currentPage !== RESULTS_PAGE ? (
          <span className={styles.buttonContainer}>
            <Button
              buttonText={"Next"}
              disabled={isFormError}
              onClick={nextButtonHandler}
            ></Button>
          </span>
        ) : isAlgorithmError ? (
          <Button
            buttonText={"Try Again"}
            onClick={retryButtonHandler}
          ></Button>
        ) : (
          !isLoading && (
            <Button
              buttonText={"New Search"}
              onClick={retryButtonHandler}
            ></Button>
          )
        )}
      </div>
    </div>
  );
};

export default Match;
