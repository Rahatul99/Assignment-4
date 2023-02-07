//Here is mindGame function and parameter is 'n'(n should be a number).Regarding the condition, the process multiplies 'n' by 3, adding 10 to the multiplication result, then, the added value is divided by 2. now, the total division value deducts by 5 and we return deduction value from the function.

// function mindGame(n){
//     if(typeof(n) == 'number'){
//     const multiplication = n * 3;
//     const addition = multiplication + 10;
//     const division = addition / 2;
//     const deduction = division - 5;
//     return deduction
//     }
//     else{
//         return 'input error!!Please input a number'
//     }
// }







//this function works on a string 'n'.the function returns string length is a odd or even number.condition1: if the length of 'n' divide by 2 and its reminder equal to zero,then it returns 'even'.if condition1 goes wrong then the sting length must be a odd number and it return 'odd'.

// function evenOdd(n){
//     if(n.length % 2 == 0 && typeof(n) == 'string'){
//         return 'even'
//     }
//     else if(n.length % 2 != 0 && typeof(n) == 'string'){
//         return 'odd'
//     }
//     else{
//         return 'input error!please input a string'
//     }
// }





//Here is a function and its parameter is a numnber 'n'.if we deduct 7 from the number 'n' and the deduction result is less then 7 then the function return deduction result.else, n multiply by 2 and function return the multiplication.

// function isLGSeven(n){
//     let deduction = n - 7;
//     if(deduction < 7 && typeof(n) == 'number'){
//         return deduction
//     }
//     else if(deduction >= 7 && typeof(n) == 'number'){
//         return n * 2;
//     }
//     else{
//         return 'input error! please input a number'
//     }

// }



//findingBadData function parameter is a number array 'n'.To get the individual element/index of the array and serially measure the condition one after one after one element, we have loop. Now, 'num' run through the loop then we catch elements from the 'num' array with the 'num' index(i).Now,elements of the 'num' array are negative then the function returns,how many number of negative numbers in the array.
 
// function findingBadData(num){

//     let badData = '0';

//     if(Array.isArray(num) == true && typeof(0) == 'number'){

//         for(let i = 0; i < num.length; i++){
//             const Element = num[i];
//             if( Element > 0){
                
//             }
//             else{
//                 badData++;
//             }
//         }
//     }
//     else{
//         return 'input error!please input a number array'
//     }
//     return badData

// }








//here is gemsToDimond function it takes 3 parameter num1,num2,num3.Suppose,num1 is 1st friend value and num2 is 2nd friend value and num3 is 3rd friend value.Now, 1st friend num1 multiply by 21,2nd friend num2 multiply by 32,3rd friend num3 multiply by 43.now total of 1st 2nd and 3rd friend number is more then equal to 2000 then deduct 2000 from total.and return deduction result.else return total.

// function gemsToDiamond(num1, num2, num3){
//     if(typeof(num1, num2, num3) == 'number'){
//         const firstFriend = num1 * 21;
//         const secondFriend = num2 * 32;
//         const thirdFriend = num3 * 43;
//         const gemsSum = firstFriend + secondFriend + thirdFriend;
//         if  (gemsSum >= 1000*2){
//             return deduction = gemsSum - 2000;
//         }
//         else{
//             return gemsSum;
//         }
//     }
//     else{
//         return 'input error!please input 3 valid numbers'
//     }
// }


