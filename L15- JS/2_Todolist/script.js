let btn = document.querySelector("button");
let inp = document.querySelector("input");
let tasklist = document.querySelector(".tasklist");

let lister = document.querySelectorAll(".tasklist");
let arr = [];
// part 1
/*btn.addEventListener('click',()=>
{
 let task=inpu.value;

 inpu.value="";

//  tasklist.innerHTML+=`<li>${task}</li>`;

let li= document.createElement('div');
arr.push(task);

li.innerHTML=task;
tasklist.append(li);
}); */

// part 2

btn.addEventListener("click", () => {
  let task = inp.value;
  console.log(task);

  inp.value = "";
  // taskList.innerHTML += `<li>${task}</li>`;
  let li = document.createElement("li");
  li.innerHTML = `
        <span>${task}</span>
        <button class="up">↑</button>
        <button class="down">↓</button>
        <button class="delete">❌</button>
    `;

  tasklist.appendChild(li);
  arr.push(li.text);
});

console.log(arr);
