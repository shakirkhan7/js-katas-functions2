  
// kata01 add

  function add(value1, value2){
    return value1 + value2
}
console.log ('Add', add(2, 4))

// // // Kata02 Multiply

function multiply(value1, value2){
    let answer = value1
    for(var i = 0; i < value2 - 1; i= add(i, 1)){
      answer = add(answer, value1)
    }
    return answer;
  }
  console.log('Multiplication', multiply(4, 6))

//   khata03 Power/Exponentiation

function power(value1, value2){
    let answer =01;
   
    for(var i1 = 0; i1 < value2; i1= add(i1, 1)){
        big = multiply(value1,1);
        answer = multiply(big,answer)
    }
    
    return answer;
  }
  console.log('Power', power(3, 4))


// // kata04
function factorial(fc){
    let answer =1;
    let result = fc
   
    for(var i2 =0;i2<fc;i2 =add(i2,1)){
        big = multiply(result,1);
        answer = multiply(big,answer)
        result=add(result,-1)
    }
    
    return answer;
  }
  
  console.log('Factorial', factorial(6))

//   Extra kata Fibonacci

function fib (f) {
let value1 = 0; value2 = 1; value3 = 1;
for (var i3 = 2; i3 <= f; i3= add(i3, 1)) {
value3 = value1  = add(value1, value2);
value1 = value2;
value2 = value3;
}
return value3;
}
console.log('Fibonacci', fib(8))

