"use strict";
//EJEMPLO CRONOMETRO
//aqui tenemos un cronometro que se va a ejecutar para siempre, sumando un segundo cada segundo.
let seconds = 0;

setInterval(() => {
  console.log(++seconds);
}, 1000);

//ahora queremos que el cronometro frene al momento de la duracion que le pasamos por parametro

const hornillo = (delaySeconds, durationSeconds) => {
  console.log(`El hornillo se prendera dentro de ${delaySeconds} segundos`);

  setTimeout(() => {
    console.log("Se prende el hornillo");

    let seconds = 0;

    const intervalID = setInterval(() => {
      console.log(++seconds);

      if (seconds === durationSeconds) {
        clearInterval(intervalID);
        console.log("ya se ha calentado, apagamos el hornillo");
      }
    }, 1000);
  }, delaySeconds * 1000);
};

hornillo(2, 5);
