let id=setInterval(()=>{
    console.log("Click the 1!");
}, 5000);

let id1=setInterval(()=> {
    console.log("Click the 2!");
}, 2000);
setTimeout(()=>{
    clearInterval(id1);
},3000)

console.log("Welcome to loupe.");