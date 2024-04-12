let grandfather = document.querySelector(".grandfather");
let father = document.querySelector(".father");
let child = document.querySelector(".child");

grandfather.addEventListener("click",(e) => {
    console.log("Clicked grandfather");
  },false
);

father.addEventListener("click",(e) => {
    console.log("Clicked father");
    e.stopPropagation();
  },
  true
);

child.addEventListener("click",(e) => {
    console.log("Clicked child");
  },
  false
);
//   yeh event cycle hai true paramater me toh parent to child chalega and false me child to parent (default)