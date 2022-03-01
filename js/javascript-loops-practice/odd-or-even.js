/* exported oddOrEven */

function oddOrEven(numbers) {
  const resultArray = [];
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    currentNumber % 2 === 0 ? resultArray.push('even') : resultArray.push('odd');
  }
  return resultArray;
}
