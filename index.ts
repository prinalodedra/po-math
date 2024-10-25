interface MathFuncs {
    sum(a: number, b: number): number;
    subtract(a: number, b: number): number;
    divide(a: number, b: number): number;
    multiply(a: number, b: number): number;
}

const mathFunctions: MathFuncs = {
    sum: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
};


export default mathFunctions;