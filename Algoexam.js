//Prime number = can only divide evenly by itself or one//

//その１
function isPrime(num){
    if (num < 2){
        return false
    }

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(8));


//その２
function isPrime(n){
    let ret = true;
    for(i=2; i<n; i++){
        if(n % i == 0) {
            ret = false;
             break;
    }
 } 
 return ret;  
}


//その３
function isPrime(n){

    if (n < 2)
    return `${n} is not a prime`

    for (let i = 2; i < n; i++){
        if(n % i === 0){
        return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
}

console.log(isPrime(13));





//Swipping number(ES6)//

let a = 5, b = 6;
[a, b] = [b, a];
console.log(`${a} ${b}`);






//Multiplication Table//

//その１
const number = parseInt(6);

for(let i = 1; i <= 10; i++) {
     const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}



//Multiplication Table from 1 to 10//
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(i + "X" + j + "=" +i * j)
    }
}


//Multiplication Tables//

const array = [];

for (let i = 1; i < 11; i++){
    array.push(i);
}

for (let j = 1; j < 11; j++){
    const multiplicationTables = array.map((num) => {
        return num * j;
    });
    console.log(multiplicationTables);
    };





//Removing duplicates//

function removeDup(arr){
    var element,
            existObj= {},
            finalArr = [];

    for(var i=0;i<arr.length;i++){
        element = arr[i];
        if(!existObj[element]){
            finalArr.push(element);
            existObj[element] = true;
        }
    }
    return finalArr;
}



//Removing duplicate Simple
let num = [1,2,5,2,1,8];
console.log([... new Set(num)]);
