
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            console.error("Cannot divide by zero.");
            return undefined;
        }
    }
}

class ScientificCalculator extends Calculator {
    square(x) {
        return x * x;
    }

    cube(x) {
        return x * x * x;
    }

    power(base, exponent) {
        return Math.pow(base, exponent);
    }
}

const scientificCalc = new ScientificCalculator();

const addResult = Calculator.prototype.add.call(scientificCalc, 10, 5);
console.log("Result of add:", addResult);

const subtractResult = Calculator.prototype.subtract.apply(scientificCalc, [10, 5]);
console.log("Result of subtract:", subtractResult);


const multiplyByTwo = Calculator.prototype.multiply.bind(scientificCalc, 2);
console.log("Result of multiplyByTwo:", multiplyByTwo(5));

const powerOfThree = ScientificCalculator.prototype.power.bind(scientificCalc, 3);
console.log("Result of powerOfThree:", powerOfThree(2));
