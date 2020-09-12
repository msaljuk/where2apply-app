const areaTypesToBackendNumber = {
  "City: Large": 11,
  "City: Midsize": 10,
  "City: Small": 9,
  "Rural: Distant": 1,
  "Rural: Fringe": 2,
  "Rural: Remote": 0,
  "Suburb: Large": 8,
  "Suburb: Midsize": 7,
  "Suburb: Small": 6,
  "Town: Distant": 4,
  "Town: Fringe": 5,
  "Town: Remote": 3,
};

export const prepareData = (formData) => {
  const areaType = formData.ur_pref;
  const gpa = formData.gpa;

  return {
    ...formData,
    gpa: parseFloat(gpa),
    ur_pref: areaTypesToBackendNumber[areaType],
  };
};
