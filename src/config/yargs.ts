{
    // const argv = require("yargs").argv;
    const argv = require("yargs")
        .option("b", {
            alias: "base",
            type: "number",
            demandOption: true,
            // default: "5,"
            describe: "Base de la tabla a multiplicar",
        })

        .option("m", {
            alias: "maxima-base",
            type: "number",
            default: "1",
            describe: "Hasta que base quiere multiplicar",
        })

        .option("h", {
            alias: "hasta",
            type: "number",
            default: "10",
            describe: "Hasta que numero quiere multiplicar",
        })

        .option("l", {
            alias: "listar",
            type: "boolean",
            default: false,
            describe: "Muestra la tabla en la consola",
        })

        // comprobamos los parametros
        .check((argv: any, option: any): boolean => {
            if (isNaN(argv.b)) {
                throw "--base tiene que ser un numero";
            }
            if (isNaN(argv.m)) {
                throw "--maxima-base tiene que ser un numero";
            }
            if (isNaN(argv.h)) {
                throw "--hasta tiene que ser un numero";
            }
            return true;
        }).argv;

    module.exports = argv;
}
