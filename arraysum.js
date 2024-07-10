
const arrayOfNumbers = [0,1,2,3,4,5];

let sum = 0;

function sumValuesOfArray(value) {
    if(value == null){
        return 0;
    }
    else if(value == 0){
        return 0;
    }
    else if(value != null){
        return sum += value;
    }
}

arrayOfNumbers.forEach(sumValuesOfArray);
console.log(sum);