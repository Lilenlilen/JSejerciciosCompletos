"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

for (let i = 0; i < catalogo.length; i++) {
  for (let a = i + 1; a < catalogo.length; a++) {
    const combinaciones = `${catalogo[i]} y ${catalogo[a]}`;
    console.log(combinaciones);
  }
}
