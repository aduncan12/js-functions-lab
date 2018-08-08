// Question 1
function maxOfTwoNumbers(x, y) {
    //     function maxOfTwoNumbers will compare parameters x and y
        if(x > y) {
            console.log('X is best!');
            return x;
        } else {
            console.log('Why not Y??');
            return y;
        }
    }

maxOfTwoNumbers(62, 42);

// Question 2
function maxOfThree(a, b, c) {
    //     function maxOfThree will compare parameters a, b, c
        if(a > b && a > c){
            console.log('A-1 job!');
            return a;
        } else if(a < b && b > c){
            console.log('B best!');
            return b;
        } else {
            console.log('C you in hell!')
            return c;
        }
    }
    
maxOfThree(203, 500, 104);

// Question 3
function isCharacterVowel(x) {
    if( x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
        console.log('true')
        return true;
    } else if( x === "A" || x === "E" || x === "I" || x === "O" || x === "U") {
        console.log('true')
        return true;
    } else {    
        console.log('false')
        return false;
    }
}

isCharacterVowel("o");

// Question 4
function sumArray(arrayAdd) {
    var sum = 0;
    for (var i = 0; i < arrayAdd.length; i++) {
        sum += arrayAdd[i];
    }
    return sum;
}


// Question 4
var numbersArray = [2,4,6,8];

function multiplyArray(arrayM) {
    var multiply = 1;
    for (var i = 0; i < arrayM.length; i++) {
        multiply *= arrayM[i];
    }
    return multiply;
}

console.log(multiplyArray(numbersArray));



// Question 5
var numberOfArguments = function(param1, param2, param3){
    for (var i = 1; i < arguments.length; i++) {
    }
    return arguments.length;
  }

  numberOfArguments(2,3,5);


// Question 6
var reverseString = function(string){

};


// Question 7
function findLongestWord(wordArray) {

}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

