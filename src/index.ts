interface MathFuncs {
    sum: (a: number, b: number) => number | string;
    subtract: (a: number, b: number) => number | string;
    divide: (a: number, b: number) => number | string;
    multiply: (a: number, b: number) => number | string;
}

const mathFunctions: MathFuncs = {
    sum: (a, b) => {
        if (isNaN(a) || isNaN(b)) return "Please enter valid value";
        return a + b;
    },
    subtract: (a, b) => {
        if (isNaN(a) || isNaN(b)) return "Please enter valid value";
        return a - b;
    },
    divide: (a, b) => {
        if (isNaN(a) || isNaN(b)) return "Please enter valid value";
        return b !== 0 ? a / b : "Cannot divide by zero";
    },
    multiply: (a, b) => {
        if (isNaN(a) || isNaN(b)) return "Please enter valid value";
        return a * b;
    }
};

export default mathFunctions;