import Grid from "@material-ui/core/Grid";
import React, { useContext, useEffect, useState } from "react";

import { ReactSortable, Sortable, MultiDrag, Swap } from "react-sortablejs";
import USAMap from "react-usa-map";
import { FormDispatch, FormState } from "../../../pages/Match/Match";

import { getRegionStyle, statesCustomConfig } from "./utils";

import styles from "./LocationSorter.module.scss";

Sortable.mount(new MultiDrag(), new Swap());

const LocationSorter = () => {
  const state = useContext(FormState);
  const dispatch = useContext(FormDispatch);

  const [neutralStates, setNeutralStates] = useState([]);
  const [preferredStates, setPreferredStates] = useState([]);
  const [nonPreferredStates, setNonPreferredStates] = useState([]);

  useEffect(() => {
    const newNeutralStates = [];
    const newPreferredStates = [];
    const newNonPreferredStates = [];

    const regions = Object.keys(state.region_dic);

    regions.map((region) => {
      if (state.region_dic[region] === "Neutral") {
        newNeutralStates.push({ id: region, name: region });
      } else if (state.region_dic[region] === "Preferred") {
        newPreferredStates.push({ id: region, name: region });
      } else if (state.region_dic[region] === "Not_Preferred") {
        newNonPreferredStates.push({ id: region, name: region });
      }

      return null;
    });

    setNeutralStates(newNeutralStates);
    setPreferredStates(newPreferredStates);
    setNonPreferredStates(newNonPreferredStates);
  }, [state.region_dic]);

  const updateFinalRegionList = (regions, preferenceType) => {
    const currentRegionList = state.region_dic;
    const updatedRegions = {};

    regions.map((region) => {
      updatedRegions[region.name] = preferenceType;
      return null;
    });
    const newRegionList = { ...currentRegionList, ...updatedRegions };

    dispatch({ type: "region_dic", payload: newRegionList });
  };

  const handlePreferredChange = (preferredRegions) => {
    setPreferredStates(preferredRegions);
    updateFinalRegionList(preferredRegions, "Preferred");
  };

  const handleNeutralChange = (neutralRegions) => {
    setNeutralStates(neutralRegions);
    updateFinalRegionList(neutralRegions, "Neutral");
  };

  const handleNonPreferredChange = (nonPreferredStates) => {
    setNonPreferredStates(nonPreferredStates);
    updateFinalRegionList(nonPreferredStates, "Not_Preferred");
  };

  return (
    <div className={styles.locationSorterContainer}>
      <div className={styles.mapKeyContainer}>
        <USAMap customize={statesCustomConfig()} title={"US Regions Key"} />
      </div>

      <div className={styles.sortTablesContainer}>
        <div className={styles.sortGuideText}>
          Drag and Drop Region Labels to your desired container
        </div>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <div className={styles.tableHeader}>Preferred</div>
            <ReactSortable
              animation={200}
              className={styles.sortable}
              delay={2}
              delayOnTouchStart={true}
              group="us_regions"
              list={preferredStates}
              setList={handlePreferredChange}
            >
              {preferredStates.map((item) => (
                <div className={getRegionStyle(item.name)} key={item.id}>
                  {item.name}
                </div>
              ))}
            </ReactSortable>
          </Grid>
          <Grid item xs={4}>
            <div className={styles.tableHeader}>Neutral</div>
            <ReactSortable
              animation={200}
              className={styles.sortable}
              delay={2}
              delayOnTouchStart={true}
              group="us_regions"
              list={neutralStates}
              setList={handleNeutralChange}
            >
              {neutralStates.map((item) => (
                <div className={getRegionStyle(item.name)} key={item.id}>
                  {item.name}
                </div>
              ))}
            </ReactSortable>
          </Grid>

          <Grid item xs={4}>
            <div className={styles.tableHeader}>Not Preferred</div>
            <ReactSortable
              animation={200}
              className={styles.sortable}
              delay={2}
              delayOnTouchStart={true}
              group="us_regions"
              list={nonPreferredStates}
              setList={handleNonPreferredChange}
            >
              {nonPreferredStates.map((item) => (
                <div className={getRegionStyle(item.name)} key={item.id}>
                  {item.name}
                </div>
              ))}
            </ReactSortable>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LocationSorter;
