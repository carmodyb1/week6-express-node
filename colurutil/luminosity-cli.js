
var colorutil = require ("./colorutil.js");
// console.log(colorutil);

// var darkencli = require ("./darken-cli.js");
// console.log(darkencli);


var red = process.argv[2];
var green = process.argv[3];
var blue = process.argv[4];

console.log(colorutil.luminosity(red, green, blue));
console.log(colorutil.darker(red, green, blue));