
// var red = process.argv[2];
// var green = process.argv[3];
// var blue = process.argv[4];

// var luminosity = (0.2126*red) + (0.7152*green) + (0.0722*blue);

// console.log(luminosity)


// Bonus 1, luminosity 
var luminosity = function(r, g, b) {
	return (0.2126*r) + (0.7152*g) + (0.0722*b);
}

var darker = function(r, g, b) {
	return " " + (r*.8) + " " +(g*.8) +" "+ (b*.8)
}

module.exports = {
	luminosity: luminosity,
	darker:  darker
};
