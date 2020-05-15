// document.addEventListener('DOMContentLoaded', () => {
//   console.log(document.getElementById('hello'));
// });

document.getElementById("kajaa").addEventListener("click", function(){ 
var mydiv = document.getElementById("mydiv");
mydiv.innerHTML = "<h3>h1をh3へ変更しました！<h3>";
});
document.getElementById("kajaa").removeEventListener("click", function(){ 
  document.getElementById("mydiv");
});

// document.getElementById("kajaa").addEventListener("click", function(){ 
// var mydiv = document.getElementById("mydiv");
// mydiv.innerHTML = "<h1>変更前<h1>";
// });

//以下 テスト。
// "use strict;"

// for (let i = 0; i < 10; i++){
//   const div = document.createElement("div");
//   div.classList.add("box");
//   div.textContent = i;

//   div.addEventListener("click", () => {
//     div.classList.toggle("circle");
//   });

//   document.body.appendChild(div);
// }
//以上 テスト。
