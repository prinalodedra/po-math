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
yarn add po-math
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

[Click_to_See_Live_Demo](https://codesandbox.io/p/sandbox/hnvn93)


```javascript
const poMath = require('po-math');

import mathFunctions from "po-math";

export default function App() {
  const sum = mathFunctions.sum(5, 6);
  const substract = mathFunctions.subtract(6, 4);
  const multiply = mathFunctions.multiply(2, 3);
  const devide = mathFunctions.divide(10, 2);

  return (
    <div className="App">
      <h1>Example :</h1>

      <h1>Sum of (5, 6) = {sum}</h1>
      <h1>Substract of (6, 4) = {substract}</h1>
      <h1>multiply of (2, 3) = {multiply}</h1>
      <h1>10 devid by 2 = {devide}</h1>
    </div>
  );
}

```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or issues, feel free to create an issue or submit a pull request to the GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
