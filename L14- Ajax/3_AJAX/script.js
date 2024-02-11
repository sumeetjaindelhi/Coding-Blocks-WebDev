//  AJAX --> Asynchronous JS and XML
// first tareeka : XML HTTPS REQUEST
let url = "https://cat-fact.herokuapp.com/facts";

const xhr = new XMLHttpRequest();

//  Request ka type set karna hoga
xhr.open("GET", url);

// request ko send kar do

xhr.send();

// request puri hone par data a jayega

xhr.onload = (data) => {
  ay = data.currentTarget.response; // isse string aayi toh usko parse karenge
  res = JSON.parse(ay);

  console.log("data Recieved");
  for (let i = 0; i < res.length; i++) {
    console.log(res[i].text);
  }
};
// error ane par
xhr.onerror = (error) => {
  console.log(error);
};
