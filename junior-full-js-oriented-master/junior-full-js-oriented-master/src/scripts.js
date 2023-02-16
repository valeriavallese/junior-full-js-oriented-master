

// Add missing code ...

//first div with id
var active = document.querySelector(".replace-c_1");
active.classList.remove("replace-c_1");
active.setAttribute("id", "c_1");

//second div with id
var active_2 = document.querySelector(".replace-c_2");
active_2.classList.remove("replace-c_2");
active_2.setAttribute("id", "c_2");

//change colors after 5 seconds
const configurations = 
   [
      '#2d8d54',
      '#22255d',
      '#740493',
      '#fc7a2f',
  ];

let i = 0;
setInterval(() => {
    i = i % configurations.length;
    document.body.style.backgroundColor = configurations[i];
    i++;
},5000);
 
