/**
 * una funcion a la que le pasemos un numero y que me de todos los primos que hay desde 0 hasta el numero
 *
 */

const primos = (num) => {
  let primonum = true;

  for (let i = 2; i < num; i++) {
    //queremos dividirlo entre 2 y un numero menor a el, para comprobar que sea primo, porque si no siempre nos va a dar true, ya que todos los numeros se dividen por uno y por el mismo.
    if (num % i === 0) {
      return false;
    }
  }
  return primonum;
};
console.log(primos(11));

//me da true si el numero es primo, y false si no es primo.

const getPrimes = (tillNumber) => {
  for (let i = 2; i <= tillNumber; i++) {
    if (primos(i)) {
      console.log(i);
    }
  }
};
getPrimes(100);
