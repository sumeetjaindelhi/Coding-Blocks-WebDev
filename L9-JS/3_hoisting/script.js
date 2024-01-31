hello();
console.log(a);

// console.log(f);
//             ^

// ReferenceError: Cannot access 'f' before initialization


function hello()
{
    console.log("Heloo world");
}

var a=20;
console.log(a);

let f=23;  
// let is strict and traditional 😊  and var do hoisting
console.log(f);

// hoisting func and variables ko upar keeech deti hai
//  variables me voh declare hoti hai  but value jab assign hogi jabhi hogi usko niche uapr nahi karti