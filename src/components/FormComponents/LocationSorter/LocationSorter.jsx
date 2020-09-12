import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";

import { ReactSortable, Sortable, MultiDrag, Swap } from "react-sortablejs";
import USAMap from "react-usa-map";

import { getRegionStyle, statesCustomConfig } from "./utils";

import styles from "./LocationSorter.module.scss";

Sortable.mount(new MultiDrag(), new Swap());

const LocationSorter = () => {
  const [neutralStates, setNeutralStates] = useState([
    { id: 1, name: "New England" },
    { id: 2, name: "Mid East" },
    { id: 3, name: "Great Lakes" },
    { id: 4, name: "Plains" },
    { id: 5, name: "Southeast" },
    { id: 6, name: "Southwest" },
    { id: 7, name: "Rocky Mountains" },
    { id: 8, name: "Far West" },
    { id: 9, name: "Outlying Areas" },
  ]);
  const [preferredStates, setPreferredStates] = useState([]);
  const [nonPreferredStates, setNonPreferredStates] = useState([]);

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
              setList={setPreferredStates}
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
              setList={setNeutralStates}
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
              setList={setNonPreferredStates}
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
