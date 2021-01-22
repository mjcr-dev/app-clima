const { getLugar } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");
const colors = require("colors");

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

        const name = lugar.name;
        const region = lugar.region;
        const country = lugar.country;
        const time = lugar.time;
        const temp = clima.main.temp;
        const feels_like = clima.main.feels_like;
        const temp_max = clima.main.temp_max;
        const temp_min = clima.main.temp_min;
        const pressure = clima.main.pressure;
        const humidity = clima.main.humidity;
        const wind_speed = clima.wind.speed;
        const wind_deg = clima.wind.deg;
        const clouds = clima.clouds.all;

        return {
            name,
            region,
            country,
            time,
            temp,
            feels_like,
            temp_max,
            temp_min,
            pressure,
            humidity,
            wind_speed,
            wind_deg,
            clouds
        }

    } catch (e) {
        return `No se ha encontrado la direccion ${direccion}`;
    }

}

console.log(
    getInfo(argv.direccion)
    .then(r => {
        console.log("==========================================================".green);
        console.log("    ".green + "Clima en ".bold + `${r.name}, ${r.region} (${r.country})`.yellow.bold);
        console.log("==========================================================".green);
        console.log("    -> Temperatura: ".bold + r.temp + "°C" + ` [Máx: ${r.temp_max}°C, Min: ${r.temp_min}°C]`);
        console.log("    -> Sensación térmica: ".bold + r.feels_like + "°C");
        console.log("    -> Presión atmosférica: ".bold + r.pressure + "hPa");
        console.log("    -> Humedad: ".bold + r.humidity + "%");
        console.log("    -> Viento: ".bold + r.wind_speed + `m/s (${r.wind_deg}°)`);
        console.log("    -> Nubes: ".bold + r.clouds + "%");
        console.log("==========================================================".green);
    })
    .catch(console.log)
);