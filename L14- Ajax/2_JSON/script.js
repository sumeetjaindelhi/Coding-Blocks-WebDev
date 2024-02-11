let arr=[
    {name:"sumeet", class: "SRM"},
    {name:"sumeet", class: "SRM"},
    {name:"sumeet", class: "SRM"}

]
let arrkajson=JSON.stringify(arr);
console.log(arrkajson);

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');

let json_arr=JSON.parse(arrkajson);
console.log(json_arr);
