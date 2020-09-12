import styles from "./LocationSorter.module.scss";
import colors from "./regionColors.scss";

const FarWest = "FarWest";
const GreatLakes = "GreatLakes";
const MidEast = "MidEast";
const NewEngland = "NewEngland";
const OutlyingAreas = "OutlyingAreas";
const Plains = "Plains";
const RockyMountains = "RockyMountains";
const Southeast = "Southeast";
const Southwest = "Southwest";

const statesToRegions = [
  { AL: Southeast },
  { AK: FarWest },
  { AZ: Southwest },
  { AR: Southeast },
  { CA: FarWest },
  { CO: RockyMountains },
  { CT: NewEngland },
  { DE: MidEast },
  { DC: MidEast },
  { FL: Southeast },
  { GA: Southeast },
  { HI: OutlyingAreas },
  { ID: RockyMountains },
  { IL: GreatLakes },
  { IN: GreatLakes },
  { IA: Plains },
  { KS: Plains },
  { KY: Southeast },
  { LA: Southeast },
  { ME: NewEngland },
  { MD: MidEast },
  { MA: NewEngland },
  { MI: GreatLakes },
  { MN: Plains },
  { MS: Southeast },
  { MO: Plains },
  { MT: RockyMountains },
  { NE: Plains },
  { NV: FarWest },
  { NH: NewEngland },
  { NJ: MidEast },
  { NM: Southwest },
  { NY: MidEast },
  { NC: Southeast },
  { ND: Plains },
  { OH: GreatLakes },
  { OK: Southwest },
  { OR: FarWest },
  { PA: MidEast },
  { RI: NewEngland },
  { SC: Southeast },
  { SD: Plains },
  { TN: Southeast },
  { TX: Southwest },
  { UT: RockyMountains },
  { VT: NewEngland },
  { VA: Southeast },
  { WA: FarWest },
  { WV: Southeast },
  { WI: GreatLakes },
  { WY: RockyMountains },
];

const regionFills = {
  NewEngland: colors.newEngland,
  MidEast: colors.midEast,
  GreatLakes: colors.greatLakes,
  Plains: colors.plains,
  Southeast: colors.southEast,
  Southwest: colors.southWest,
  RockyMountains: colors.rockyMountains,
  FarWest: colors.farWest,
  OutlyingAreas: colors.outlyingAreas,
};

export const statesCustomConfig = () => {
  return (() => {
    const finalConfig = {};

    // eslint-disable-next-line
    statesToRegions.map((item) => {
      const state = Object.keys(item)[0];

      finalConfig[state] = { fill: regionFills[item[state]] };
    });

    return finalConfig;
  })();
};

export const getRegionStyle = (regionName) => {
  switch (regionName) {
    case "New England":
      console.log("hit");
      return styles.newEngland;
    case "Mid East":
      return styles.midEast;
    case "Great Lakes":
      return styles.greatLakes;
    case "Plains":
      return styles.plains;
    case "Southeast":
      return styles.southEast;
    case "Southwest":
      return styles.southWest;
    case "Rocky Mountains":
      return styles.rockyMountains;
    case "Far West":
      return styles.farWest;
    case "Outlying Areas":
      return styles.outlyingAreas;
    default:
      return;
  }
};
