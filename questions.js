// //Add two Numbers
// You are provided with two numbers 
// A
//  and 
// B
// . Your task is to add these two numbers.

// Note: You have to complete AddTwoNumbers function. No need to take any input.

const AddTwoNumbers = (a,b) => {
    return a+b;
};


// Find if the conditions are obeyed or not?
// You are given two number first as 
// A
//  and second as 
// B
//  and check if both conditions (
// A
// <
// 10
//  and 
// A
// >
// B
// ) are satisfied or not with the help of operators.


const Is_Valid = (a,b) => {
    if(a<10 && a>b){
      console.log("True");
    }else{
      console.log("False");
    }
  };

  
  
  // Check the conditons
// You are given two numbers 
// A
//  and 
// B
// . You need to do the following checks:

// if both are divisible by 10 console true.
// if both are not divisible by 10 console false.
// if one of them only is divisible by 10 console true.
// Use operator to do this.



const Check = (A, B) => 
{
return ((B%10===0 && A%10===0) || (B%10===0 || A%10===0));
};

// Find the first digit of a 4 digit number
// You are provided a four digit number N only. Your task is to print out the first digit of that number.

const First_Digit = (n) => {
    return parseInt(n / 1000);
  };
  
// Find the last digit of a 4 digit number
// You are provided a four digit number N only. Your task is to print out the last digit of that number.







const Last_Digit = (n) => {
    return n%10;
 };
 
 // Find the remainder
// You are provided with two numbers 
// A
//  and 
// B
//  where 
// A
//  as  divisor and 
// B
//  as  dividend.Your task is find the remainder.


const Find_the_remainder = (a,b) => {
    return (b%a);
};





// You are provided with two numbers 
// A
//  and 
// B
// . Your task is to multiply these two numbers.

// Note: You have to complete Multiply_two_number function. No need to take any input.






const Multiply_two_number = (a,b) => {
    return a*b;
};


console.log(Multiply_two_number);


// Shyam has got his marks in three subjects as 
// A
// , 
// B
// , and 
// C
//  (out of 100).Write a program to calculate his total marks and his average.

// Note: You have to complete Sum and Average functions. No need to take any input.




const Sum = (A, B, C) => 
{
 return A,B,C
};
console.log(Sum);
const Average = (A, B, C) => 
{
    D=(A+B+C)/3;
    return D;
    
};

console.log(Average)
