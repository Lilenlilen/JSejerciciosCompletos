/**
 * El usuario juega atravez del prompt
 * tu oponente sera la computadora
 * gana el primero que consiga 3 puntos
 */

"use strict";

const computadora = ["piedra", "papel", "tijera"];
const random = Math.floor(Math.random() * computadora.length);
const compuRandom = computadora[random];
console.log(compuRandom);

const jugador = prompt("Dime si: piedra, papel o tijera?");
let puntosUsuario = 0;
let puntosCompu = 0;

if (compuRandom === jugador) {
  alert("empate");
} else if (compuRandom !== jugador) {
  if (compuRandom === "piedra" && jugador === "papel") {
    alert("ganaste");
  } else if (compuRandom === "piedra" && jugador === "tijera") {
    alert("perdiste");
  } else if (compuRandom === "papel" && jugador === "tijera") {
    alert("ganaste");
  } else if (compuRandom === "papel" && jugador === "piedra") {
    alert("perdiste");
  } else if (compuRandom === "tijera" && jugador === "piedra") {
    alert("ganaste");
  } else if (compuRandom === "tijera" && jugador === "papel") {
    alert("perdiste");
  }
}
