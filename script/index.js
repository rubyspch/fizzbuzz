// The Problem:
/* 
1. Write a program that prints the numbers from 1 to 100
2. For numbers that are multiples of both 3 and 5 print 'FIZZBUZZ' instead of the number
3. For each multiple of 3, print 'FIZZ' instead of the number
4. For each multiple of 5, print 'BUZZ' instead of the number
5. For numbers that are not multiples of 3, 5 or both, print the number as is

MOD=modulus

*/

// FOR LOOP
// set number to 1
// break when number reaches 100
// increment number by 1

// IF number MOD 3 === 0 AND number MOD 5 === 0
    // print 'fizzbuzz'
// ELSE IF number MOD 3 === 0
    // print 'fizz'
// ELSE IF number MOD 5 === 0
    // print 'buzz'
// ELSE
    // print number

    function fizzBuzz(){
        var outputDiv= document.getElementById("FBresult");

        for (let number =1; number<=100; number++){
            if (number%3===0 && number%5===0 ){
                outputDiv.innerHTML+="<span style='color:#FF0000'>FIZZBUZZ <br/></span>";
            } else if(number%3===0){
                outputDiv.innerHTML+="<span style='color:#00FF00'>FIZZ<br/></span>";
            } else if (number%5===0){
                outputDiv.innerHTML+="<span style='color:#0000FF'>BUZZ<br/></span>";
            } else {
                outputDiv.innerHTML+=`${number}<br/>`;
            }
        }
    }

var goButton= document.getElementById("button");
goButton.addEventListener('click', function(){
    fizzBuzz();
});