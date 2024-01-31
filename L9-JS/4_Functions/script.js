function hello()    // 1st type to declare func
{
    console.log("hello");
}
 hello();

 //since function is variable toh we can store it inside a variable too.......


 var x=function(a, b) {
    return a + b;
}                           // isme hoisting nahi hogi

 var y=function (a,b)
 {
    return a-b;
 }
console.log(y(10,20));
console.log(x(10,20));
