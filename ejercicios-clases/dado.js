/**
 * crea un programa que simule las tiradas de un dado:
 * -el dado debe generar en cada tirada un valor entre 1 y 6 (incluidos)
 * - en cada tirada mostrar el valor del dado y el total acumulado
 * -cuando el total de tiradas supere o iguales los 100 puntos,
 * muestra un mensaje indicando que se han alcanzado los 100 puntos
 */

"use strict";

let valor;

for (let i = 0; i <= 100; ) {
  let tirada = Math.floor(Math.random() * (7 - 1) + 1);
  valor = i + tirada;
}
console.log(valor);

/**RESUELTO CON WILE
 * const tirada () => {
 * return Math.floor(Math.random() * (7 - 1) + 1)
 * };
 * let puntos = 0;
 * while (puntos < 100) {
 * puntos += tirarDados();
 *
 * console.log("Puntuacion acumulada:" puntos);
 * }
 * console.log("Haz alcanzado los 100 puntos")
 */
