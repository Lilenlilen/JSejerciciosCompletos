/**crea una funcion que reciba como parametro un array cualquiera
 * y retorne otro array con los elementos del primero en orden inverso.
 * no vale utilizar el metodo reverse!
 */
"use strict";

// const reverseArray = (array) => {
//   const nuevoArray = [];
//   for (let i = 0; i <= array.lenght; i++) {
//     nuevoArray.unshift(array[i]);
//   }

//   return nuevoArray;
// };

// console.log(reverseArray([1, "patata", 3, "pimiento", 5, 6]));

const reverse = (arr) => {
  const reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
};

console.log(reverse([1, 2, 3, 4, 5, 6]));
