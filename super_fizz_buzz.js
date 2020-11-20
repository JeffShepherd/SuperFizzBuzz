///start of first challenge

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

///end of first challenge

///start of second

function printSuperFizzBuzz(i) {

  do {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log("SuperFizzBuzz");
      i++;
    } else if (i % 3 === 0 && i % 7 === 0) {
      console.log("SuperFizz");
      i++;
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log("SuperBuzz");
      i++;
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      i++;
    } else if (i % 3 === 0) {
      console.log("Fizz");
      i++;
    } else if (i % 5 === 0) {
      console.log("Buzz");
      i++;
    } else if (i % 7 === 0) {
      console.log("Super");
      i++;
    } else {
      console.log(i);
      i++;
    }
  }
  while (i < 1001);

}

//OR




///end of second challenge
