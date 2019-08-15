export const removeFeature = item => {
  console.log("action creator was invoked");
  return {
    type: "REMOVE_FEATURE",
    payload: item
  };
};

// const addFeature = item => {
//   return {
//     type: "ADD_FEATURE",
//     payload: item
//   };
// };

export const buyItem = item => {
  console.log("buyItem action works");
  return {
    type: "BUY_ITEM",
    payload: item
  };
};
