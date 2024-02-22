let arr=[1,2,3,4,5];

let narr=arr.filter((val, idx,arr)=>{
  if(val%2==0)
  {
    return val;
  }
});

console.log(narr);          // size fix nahi hota output ka