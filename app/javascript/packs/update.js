"use strict"


var kaja = document.getElementById("mytextbox")
kaja.addEventListener("change", function(){
  kaja.nextSibling.innerHTML
}, false);

// function alertValue($this) {
//   $this.nextSibling.innerHTML = $this.value;
// }

// $(function() {
//   $('input[type="number"]').on('keyup change', function() {
//     update_field();
//   });
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
