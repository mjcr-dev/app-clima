const { getLugar } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");

const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: "Dirección de la ciudad para obtener el clima",
        demmand: true
    }
}).help().argv;

const getInfo = async(direccion) => {

    try {
        const lugar = await getLugar(direccion);
        const clima = await getClima(lugar.lat, lugar.lon);

        const temp = clima.main.temp;
        const name = lugar.name;
        const region = lugar.region;
        const country = lugar.country;

        return `El clima en ${name}, ${region} (${country}) es de ${temp} grados`;

    } catch (e) {
        return `No se ha encontrado la direccion ${direccion}`;
    }

}

console.log(
    getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
);