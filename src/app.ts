import colors from "colors";

import { crearArchivo } from "./helpers/multiplicar";
import { argv } from "./config/yargs";

// console.log(argv);

//-----------Esto es un ejemplo, veremos yargs un paquete que hace esto mas eficiente-----------+
// // const base = 1;                                                                           |
//                                                                                              |
// // console.log(process.argv);                                                                |
// /* process.argv  ---> nos devuelve un arreglo en el que se encuentran los                    |
//argumentos que le pasamos a la consola cuando ejecutamos nuestra aplicacion */                |
//                                                                                              |
// const [, , arg3 = "--base=5"] = process.argv; //asignamos un valor por defecto para arg3     |
// por si no lo pasan como argumento                                                            |
// const [, base = 5] = arg3.split("="); //separamos el argumento que le pasamos en dos, ya     |
//que estamos esperando algo como esto --base=5, y nos quedamos solo con el 5                   |
// console.log(base);                                                                           |
//----------------------------------------------------------------------------------------------+

// const base = 5;
console.clear();

crearArchivo(argv.b, argv.m, argv.h, argv.l)
    .then((nombreArchivo: string) =>
        console.log(colors.yellow(nombreArchivo), "creado")
    )
    .catch((err: Error) => console.log(err));
