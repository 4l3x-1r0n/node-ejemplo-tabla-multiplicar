import fs from "fs"; /* fs---> importamos file system */
import colors from "colors";

// Con async
const crearArchivo = async (
    base: number,
    maximaBase: number,
    hasta: number,
    listar: boolean
): Promise<string> => {
    const nombreFichero =
        maximaBase <= base
            ? `./salida/tabla base ${base} hasta el ${hasta}.txt`
            : `./salida/tabla base ${base} a base ${maximaBase} hasta el ${hasta}.txt`;

    let salida = "";
    let file = "";

    do {
        for (let i = 1; i <= hasta; i++) {
            file += `${base} x ${i} = ${base * i}\n`;

            salida += `${base} ${colors.yellow("x")} ${i} ${colors.yellow(
                "="
            )} ${base * i}\n`;
        }
        base++;
    } while (base <= maximaBase);

    if (listar) {
        console.log(colors.green("=========================="));
        console.log(colors.green("Tabla del "), colors.blue(String(base)));
        console.log(colors.green("=========================="));

        console.log(salida);
    }

    //fs.writeFile --->  hace un callback cuando termian de escibir el fichero mandando un error como parametro si no lo pudo escribir
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(`Tabla del ${base} creada`);
    // });

    //fs.writeFileSync --->  escribe el fichero, por lo que tenemos que usar un try catch para saber si pudo escribir sin problemas
    try {
        fs.writeFileSync(nombreFichero, file);
        return nombreFichero;
    } catch (err) {
        throw err;
    }
};

// Otra forma de hacerlo con promesas
// const crearArchivoPromesa = (base: number) => {
//     return new Promise((resolve, reject) => {
//         const nombreFichero = `tabla-${base}.txt`;
//         let salida = "";

//         console.log("==========================");
//         console.log("Tabla del ", base);
//         console.log("==========================");
//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }

//         console.log(salida);

//         fs.writeFileSync(nombreFichero, salida);
//         resolve(nombreFichero);
//     });
// };

/* exportamos la funcion para usarla desde fuera */
module.exports = {
    // crearArchivo: crearArchivo
    //si el valor de la propiedad es igual al nombre de la propiedad, se puede omitir
    crearArchivo,
};
