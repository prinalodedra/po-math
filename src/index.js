const mathFunctions = {
    sum: (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
            return "Please enter valid values";
        }
        return a + b;
    },
    subtract: (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
            return "Please enter valid values";
        }
        return a - b;
    },
    divide: (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
            return "Please enter valid values";
        }
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    },
    multiply: (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
            return "Please enter valid values";
        }
        return a * b;
    }
};

module.exports = mathFunctions;
