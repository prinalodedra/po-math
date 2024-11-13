# po-math

A simple math utility package for basic operations and calculations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the `po-math` package via npm:

```bash
npm install po-math
```

You can install the `po-math` package via yarn:

```bash
yarn po-math
```

## Usage

To use `po-math` in your project, you can import it as follows:

### CommonJS

```javascript
const poMath = require('po-math');
```

### ES Modules

```javascript
import poMath from 'po-math';
```

### API

The `po-math` package exposes the following methods:

#### `add(a, b)`

Adds two numbers.

#### Parameters:
 * a (number): The first number.
 * b (number): The second number.

Returns: The sum of a and b.

#### `subtract(a, b)`

Subtracts one number from another.

#### Parameters:

 * a (number): The number to subtract from.
 * b (number): The number to subtract.

Returns: The result of a - b.

#### `multiply(a, b)`

Multiplies two numbers.

#### Parameters:

 * a (number): The first number.
 * b (number): The second number.

Returns: The product of a and b.

#### `divide(a, b)`

Divides one number by another.

#### Parameters:
 * a (number): The dividend.
 * b (number): The divisor.

Returns: The result of a / b.
Throws: An error if b is zero.

### Examples

Below are some examples demonstrating how to use the po-math package:

[Demo](https://codesandbox.io/p/sandbox/hnvn93)


```javascript
const poMath = require('po-math');

// Addition
const sum = poMath.add(5, 3);
console.log(`Sum: ${sum}`); // Output: Sum: 8

// Subtraction
const difference = poMath.subtract(10, 4);
console.log(`Difference: ${difference}`); // Output: Difference: 6

// Multiplication
const product = poMath.multiply(2, 3);
console.log(`Product: ${product}`); // Output: Product: 6

// Division
try {
  const quotient = poMath.divide(8, 2);
  console.log(`Quotient: ${quotient}`); // Output: Quotient: 4
} catch (error) {
  console.error(error.message);
}

```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or issues, feel free to create an issue or submit a pull request to the GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
