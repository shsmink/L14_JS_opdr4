/*
// Function declaration below

function square(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
  }

// Function expression below

const square = function (number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};
*/

// Arrow function below

const square = (number1, number2) => {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
};

// Argument below

  square(5, 6); // 3721
  console.log(square(5,6));
