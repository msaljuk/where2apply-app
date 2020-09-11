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
  { MO: RockyMountains },
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
  NewEngland: "red",
  MidEast: "green",
  GreatLakes: "yellow",
  Plains: "orange",
  Southeast: "purple",
  Southwest: "black",
  RockyMountains: "brown",
  FarWest: "teal",
  OutlyingAreas: "white",
};

export const statesCustomConfig = () => {
  return (() => {
    const finalConfig = {};

    statesToRegions.map((item) => {
      const state = Object.keys(item)[0];

      finalConfig[state] = { fill: regionFills[item[state]] };
    });

    return finalConfig;
  })();
};
