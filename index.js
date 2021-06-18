//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let string1 = 'Rutabagas';
let string2 = 'Chemistry';
let string1Arr = string1.split("");
let string2Arr = string2.split("");
let newStringArr = [];
let newString = "";

for (let i = 0; i <= string1.length + string2.length; i++) {
  newStringArr.push(string1Arr[i]+string2Arr[i]);
  newString = newStringArr.join("");
}

console.log(newString);
//console.log(string1Arr);
// let str1Arr = [];
// let str2Arr = [];
// let str = [];

// string1.split("");
// string2.split();


//  console.log(str);
