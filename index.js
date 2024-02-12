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
            return n1 / n2
        }
    }

    let validInput = false;
    
    while (!validInput){
        let operator = rs.question('What operation do you want to perform?\n');
        if (operator in operations) {
            let num1;
            let num2;

            while (isNaN(parseFloat(num1))){
                num1 = rs.question('Please enter the first number\n')
                if (isNaN(parseFloat(num1))) {
                    console.log("That is not a valid number");
                }
            }

            while (isNaN(parseFloat(num2))){
                num2 = rs.question('Please enter the second number\n')
                if (isNaN(parseFloat(num2))) {
                    console.log("That is not a valid number");
                }
            }

                
            const result = operations[operator](parseFloat(num1), parseFloat(num2));
            console.log("The result is " + result);
            validInput = true;
        }
        else {
            console.log("That is not a valid operation")
        }
    }
    

}

calculator();