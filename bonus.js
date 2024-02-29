let rs = require('readline-sync');


const operations = {
    "+": (n1, n2) => n1 + n2,
    "-": (n1, n2) => n1 - n2,
    "*": (n1, n2) => n1 * n2,
    "/": (n1, n2) => n1 % n2 === 0 ? n1 / n2 : (n1 / n2).toFixed(2)
}



const getProblemParsed = (equation) => {
    const problem = equation.split(/\s*([\+\-\*\/])\s*/).filter(problem => problem.trim() !== '');
    if (!problem === 3) return false;

    const num1 = parseFloat(problem[0]);
    const operator = problem[1]
    const num2 = parseFloat(problem[2]);

    if (!isNaN(num1) && operator in operations && !isNaN(num2)) {
        return [num1, operator, num2]
    }
    return false
}

function calculator(operations) {
        let equation = rs.question('What operation do you want to perform?\n');
        const arrOfOperations = Object.keys(operations)
        const isOperatorInList = arrOfOperations.some((item) => equation.includes(item));
        const problemParsed = getProblemParsed(equation);
    
        if(isOperatorInList && problemParsed) {
            const [num1, operator, num2] = problemParsed;
            const result = operations[operator](num1,num2);
            console.log('The result is ' + result)
        }
        else {
            console.log("Invalid input. Please enter a valid operation in the format: number operator number (ex: 1 + 2)")
            return calculator(operations)
        }
}


calculator(operations);