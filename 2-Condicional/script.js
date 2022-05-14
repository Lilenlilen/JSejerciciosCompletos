"use strcit";
const nombre = prompt("¿Cual es tu nombre?");
const edad = +prompt("¿Cuantos años tienes?");

if (edad < 12) {
  console.log(`A ${nombre} le corresponde el descuento infantil.`);
} else if (edad < 30) {
  console.log(`A ${nombre} le corresponde el descuento juvenil.`);
} else if (edad > 60) {
  console.log(`A ${nombre} le corresponde el descuento de jubilados.`);
} else {
  console.log("No tenemos descuento especial para ti.");
}
