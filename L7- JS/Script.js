let p={
    Name:"Sumeet",
    age:22, 
    Hobby:"Coffee pina ",
    " ":"Secret key"
}
console.log(p.age)

console.log(p[" "])   

for(let keys in p)
{
    console.log(p[keys]);
}


//arrays

let arr=[1,2,3,4,"hello",true, false]

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(let val of arr)        // of arrays ke liye hai
{
    console.log(val);
}
for(let val in arr)    // in  object me use hota hai 
{
    console.log(val);
}

