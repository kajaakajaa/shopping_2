// document.addEventListener('DOMContentLoaded', () => {
//   console.log(document.getElementById('hello'));
// });

var mydiv = document.getElementById("mydiv");
document.getElementById("kajaa").addEventListener("click", function(){ 
mydiv.innerHTML = "<h3>h1をh3へ変更しました！<h3>";
}, false);

var mydiv = document.getElementById("mydiv");
mydiv.removeEventListener("click", function(){
  mydiv.innerHTML = "変更前";
});

// 要素(オブジェクト).removeEventListener(イベントの種類, 関数[, オプション]);

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
