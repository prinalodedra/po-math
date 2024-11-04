import mathFunctions from "./src/index";

console.log("Sum of 3 and 5:", mathFunctions.sum(3, 5)); // 8
console.log("Sum of 'a' and 5:", mathFunctions.sum(parseInt('a'), 5)); // "Please enter valid values"

console.log("Difference of 10 and 5:", mathFunctions.subtract(10, 5)); // 5
console.log("Difference of 'a' and 5:", mathFunctions.subtract(parseInt('a'), 5)); // "Please enter valid values"

console.log("Product of 4 and 6:", mathFunctions.multiply(4, 6)); // 24
console.log("Product of 'a' and 6:", mathFunctions.multiply(parseInt('a'), 6)); // "Please enter valid values"

console.log("Quotient of 20 and 4:", mathFunctions.divide(20, 4)); // 5
console.log("Divide by zero:", mathFunctions.divide(20, 0)); // "Cannot divide by zero"
console.log("Quotient of 'a' and 4:", mathFunctions.divide(parseInt('a'), 4)); // "Please enter valid values"
