const fs = require("fs");

const content = fs.readFileSync("pltaData.js", "utf8");

if (content.includes("en: {")) {
  console.log("Already transformed");
  process.exit(0);
}

const locStart = content.indexOf("locations: [");
const locEnd = content.lastIndexOf("]");
const locationsString = content.substring(locStart + 11, locEnd + 1);

const idGlossaryStr = JSON.stringify(
  [
    { term: "Energi Kinetik", desc: "Energi yang dimiliki oleh sebuah benda karena gerakannya, dalam hal ini aliran air." },
    { term: "Energi Potensial", desc: "Energi yang tersimpan pada benda karena posisi atau kedudukannya, seperti air di waduk yang tinggi." },
    { term: "Penstock (Pipa Pesat)", desc: "Pipa besar yang menahan tekanan tinggi untuk mengalirkan air dari waduk ke turbin." },
    { term: "Powerhouse", desc: "Gedung sentral tempat turbin dan generator di instalasi." },
    { term: "Turbin Air", desc: "Mesin berputar yang mengambil energi kinetik dari aliran air yang deras." },
    { term: "Baseload", desc: "Beban dasar listrik konstan 24 jam sehari." },
    { term: "Reservoir", desc: "Waduk atau danau buatan untuk menampung air dalam jumlah masif." },
  ],
  null,
  4,
);

const enGlossaryStr = JSON.stringify(
  [
    { term: "Kinetic Energy", desc: "Energy possessed by an object due to its motion (water flow)." },
    { term: "Potential Energy", desc: "Energy stored in an object due to its position, such as high-elevation water." },
    { term: "Penstock", desc: "A high-pressure pipe channeling water from the reservoir to the turbines." },
    { term: "Powerhouse", desc: "The central building hosting the turbines and generators." },
    { term: "Water Turbine", desc: "A rotary machine extracting kinetic energy from fast-flowing water." },
    { term: "Baseload", desc: "The minimum level of steady electricity demand over 24 hours." },
    { term: "Reservoir", desc: "An artificial lake for massive water storage." },
  ],
  null,
  4,
);
