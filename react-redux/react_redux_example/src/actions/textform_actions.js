export const SETTEXT = "SETTEXT";
export const setText = text => ({
  type: SETTEXT,
  text
});

export const ADDTOLIST = "ADDTOLIST";
export const addToList = item => ({
  type: ADDTOLIST,
  item
});
