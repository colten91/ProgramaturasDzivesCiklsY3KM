function calculateTotal(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  return sum;
}

const scores = [12, 45, 78, 23, 90, 55];
console.log("The total score is: " + calculateTotal(scores));