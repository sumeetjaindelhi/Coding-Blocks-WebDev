let arr=[1,2,3,4,5];

let narr=arr.reduce((acc,val,idx,arr)=>         // acc me idx ka 0 and val me 1 idx value aayegi  idx bhi 1 hoga
{
return acc*val;
},0 );  //  0 means yaha ki acc ki value initalize kar rahe hai , lagao ya na lagao depends on need 

// acc ki value ddenge toh array 0 se iterate karega varna nahi denge voh khud 0 index ki value le lega and idx me 1 se uthega

console.log(narr); 