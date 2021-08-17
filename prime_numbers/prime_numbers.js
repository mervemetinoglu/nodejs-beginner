//consoledan deger almak icin
//node prime_numbers/prime_numbers.js 7 22
//2. indexten sonrasini aliyoruz slice ile
const arguments = process.argv.slice(2);


function showPrimeNumbers(lowNumber, highNumber) {
  for (let i = lowNumber; i <= highNumber; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}
// *1 ile string ifadeyi numbera cevirdik.
showPrimeNumbers(arguments[0] * 1, arguments[1] * 1);
