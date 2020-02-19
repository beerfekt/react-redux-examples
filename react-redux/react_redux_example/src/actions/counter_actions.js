export const INCREMENT = "INCREMENT";
export const increment = () => ({
  type: INCREMENT
});

export const SENDFIVE = "SENDFIVE";
export const sendFive = numericValue => ({
  type: SENDFIVE,
  numericValue // numericValue: numericValue            key:value assigment
});
