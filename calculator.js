function calculate(firstNumber, secondNumber, operation){
    
    let result = 0;
    if(operation == '+'){

        if(firstNumber == Infinity || secondNumber == Infinity){
            return Infinity;
        }
        result = firstNumber + secondNumber;   
        return result; 
    }

    if(operation == '-'){
        if(firstNumber == Infinity || secondNumber == Infinity){
            return Infinity;
        }
        result = firstNumber-secondNumber;
        return result;
    }

    if(operation == '*' | operation == 'x'){
        if(firstNumber == Infinity || secondNumber == Infinity){
            return Infinity;
        }
        result = firstNumber * secondNumber;
        return result;
    }

    if(operation == '/'){
        if(firstNumber ==0 && secondNumber == 0){
            return undefined;
        }
        if(secondNumber == 0){
            return Infinity;
        }
        result = firstNumber / secondNumber;
        return result;
    }
    else {
        return 0;
    }
}


console.log('Sum: ' , calculate(Infinity,2,'+'));
console.log('Difference:' , calculate(6,12,'-'));
console.log('Product: ' , calculate(6,2,'*'));
console.log('Quotient: ' , calculate(0,0,'/'));