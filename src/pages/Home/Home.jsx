import classnames from "classnames";
import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button/Button";
import CollegesTicker from "../../components/CollegesTicker/CollegesTicker";
import GridCardModule from "../../components/GridItems/GridCardModule/GridCardModule";
import GridLayoutModule from "../../components/GridLayoutModule/GridLayoutModule";
import GridPuddleModule from "../../components/GridItems/GridPuddleModule/GridPuddleModule";

import algorithm from "../../images/algorithm.png";
import cappex from "../../images/cappex.png";
import collegeBoard from "../../images/collegeBoard.png";
import ipeds from "../../images/ipeds.png";
import preferences from "../../images/preferences.png";
import profile from "../../images/profile.png";

import styles from "./Home.module.scss";

const Home = () => {
  const history = useHistory();

  const handleTryPress = () => {
    history.push("/match");
  };

  const processSection = {
    headerText: "The Process",
    subtitleText: "Find your perfect college list in three simple steps:",
    theme: "black",
  };
  const dataSection = {
    headerText: "Our Data",
    subtitleText: "The best models use the best data sources. Ours does too.",
  };
  const aboutSection = {
    headerText: "About",
    subtitleText: "We’re just a bunch of college students who got bored.",
    theme: "black",
  };

  return (
    <div className={styles.container}>
      <section className={styles.landingContainer}>
        <div className={styles.tickerContainer}>
          <CollegesTicker></CollegesTicker>
        </div>
        <div className={styles.landingContentContainer}>
          <div className={styles.header}>
            Find the colleges that{" "}
            <span className={styles.lineBreak}>are right for you</span>
          </div>
          <div className={styles.tagline}>
            Use our data-rich statistical model to match to{" "}
            <span className={styles.lineBreak}>
              a balanced list of colleges
            </span>
          </div>
          <div className={styles.hook}>For free.</div>
          <div className={styles.button}>
            <Button buttonText={"Try"} onClick={handleTryPress}></Button>
          </div>
        </div>
      </section>
      <section
        className={classnames(styles.section, styles.processContainer)}
        id={"process"}
      >
        <div className={styles.gridContainer}>
          <GridLayoutModule {...processSection}>
            <GridPuddleModule
              imageSrc={preferences}
              stepDescription={"Tell us what you look for in a college"}
              stepNumber={1}
              stepTitle={"Enter Preferences"}
              textTheme={"black"}
            ></GridPuddleModule>
            <GridPuddleModule
              imageSrc={profile}
              stepDescription={"Tell us your academic credentials "}
              stepNumber={2}
              stepTitle={"Enter Profile"}
              textTheme={"black"}
            ></GridPuddleModule>
            <GridPuddleModule
              imageSrc={algorithm}
              stepDescription={"Let our algorithm model your data with ours"}
              stepNumber={3}
              stepTitle={"Get Results"}
              textTheme={"black"}
            ></GridPuddleModule>
          </GridLayoutModule>
        </div>
      </section>
      <section
        className={classnames(styles.section, styles.dataContainer)}
        id={"data"}
      >
        <div className={styles.gridContainer}>
          <GridLayoutModule {...dataSection}>
            <GridPuddleModule
              headerTextStyle={{ marginTop: "20%" }}
              imageSrc={ipeds}
              imageStyle={{ marginTop: "17%", width: "70%" }}
              stepDescription={"Integrated Postsecondary Education Data System"}
              stepTitle={"IPEDS"}
              subtitleTextStyle={{ fontSize: "20px" }}
            />
            <GridPuddleModule
              headerTextStyle={{ marginTop: "13%" }}
              imageSrc={collegeBoard}
              imageStyle={{
                marginTop: "17%",
                marginBottom: "4%",
                width: "94%",
              }}
              stepDescription={
                "College Board's data initiative for US Colleges"
              }
              stepTitle={"Common Data Set (CDS)"}
              subtitleTextStyle={{ fontSize: "20px" }}
            />
            <GridPuddleModule
              headerTextStyle={{ marginTop: "8%" }}
              imageSrc={cappex}
              imageStyle={{ width: "76%" }}
              stepDescription={"Renowned college applications advising service"}
              stepTitle={"Cappex"}
              subtitleTextStyle={{ fontSize: "20px" }}
            />
          </GridLayoutModule>
        </div>
      </section>
      <section
        className={classnames(styles.section, styles.aboutContainer)}
        id={"about"}
      >
        <div className={styles.gridContainer}>
          <GridLayoutModule {...aboutSection}>
            <GridCardModule
              headerText={"Choudry Abdul Rehman"}
              role={"Model Scripter"}
              subtitleText={"Knox 2023"}
            />
            <GridCardModule
              headerText={"Hesham Nawaz"}
              role={"Model Scripter"}
              subtitleText={"MIT 2022"}
            />
            <GridCardModule
              headerText={"Saljuk Gondal"}
              role={"Model Scripter | Designer | Developer"}
              subtitleText={"Stanford 2022"}
            />
          </GridLayoutModule>
        </div>
      </section>
    </div>
  );
};

export default Home;
