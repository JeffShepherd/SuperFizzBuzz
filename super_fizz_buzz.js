

for (i = 0; i < 1001; i++) {

  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    console.log("SuperFizzBuzz");
  } else if (i % 3 === 0 && i % 7 === 0) {
    console.log("SuperFizz");
  } else if (i % 5 === 0 && i % 7 === 0) {
    console.log("SuperBuzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 7 === 0) {
    console.log("Super");
  } else {
    console.log(i);
  }

}
