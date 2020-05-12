// document.addEventListener('DOMContentLoaded', () => {
//   console.log(document.getElementById('hello'));
// });

//以下 テスト。
"use strict;"

for (let i = 0; i < 10; i++){
  const div = document.createElement("div");
  div.classList.add("box");
  div.textContent = i;

  div.addEventListener("click", () => {
    div.classList.toggle("circle");
  });

  document.body.appendChild(div);
}
//以上 テスト。
