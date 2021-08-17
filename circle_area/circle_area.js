const arguments = process.argv.slice(2);

let area = (Math.PI * Math.pow(arguments, 2)).toFixed(2);
console.log(`The area of the circle with radius ${arguments} is: ${area}`);