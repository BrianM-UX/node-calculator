let rs = require('readline-sync');


function calculator() {

    const operations = {
        "+": function add(n1, n2) {
            return n1 + n2
        },
        "-": function subtract(n1, n2) {
            return n1 - n2
        },
        "*": function multiply(n1, n2) {
            return n1 * n2
        },
        "/": function divide(n1, n2) {
            if (n1 % n2 === 0) {
                return n1 / n2
            }
            else {
                return (n1 / n2).toFixed(2);
            }
        }
    }

    let validInput = false;
    
    while (!validInput){
        let equation = rs.question('What operation do you want to perform?\n');
        if (equation.includes('+') || equation.includes('-') || equation.includes('*') || equation.includes('/')){
            const problem = equation.split(/\s*([\+\-\*\/])\s*/).filter(problem => problem.trim() !== '');

            if (problem.length === 3) {
                const num1 = parseFloat(problem[0]);
                const operator = problem[1]
                const num2 = parseFloat(problem[2]);

            
                if (!isNaN(num1) && operator in operations && !isNaN(num2)){
                    const result = operations[operator](num1, num2);
                    console.log("The result is " + result);
                    validInput = true;
                }
                else {
                    console.log("Invalid input. Please enter a valid operation in the format: number operator number (ex: 1 + 2)")
                }
            }
            else {
                console.log("Invalid input. Please enter a valid operation in the format: number operator number (ex: 1 + 2)")
            }
        }
    }
    

}

calculator();