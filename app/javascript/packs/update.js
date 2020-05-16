// document.addEventListener('DOMContentLoaded', () => {
//   console.log(document.getElementById('hello'));
// });

function yassa(e){
  const str = document.getElementById("myh1").textContent;

  if(str=="変更前"){
    var myh1 = document.getElementById("myh1");
    myh1.innerHTML = "<h3>変更されました!<h3>";
  }else if(str=="変更されました!"){
    var myh1 = document.getElementById("myh1");
    myh1.innerHTML = "変更前";
  }
}
const kajaa = document.getElementById("kajaa");
kajaa.addEventListener("click", yassa);

// document.getElementById("kajaa").addEventListener("click", function(){ 
// var mydiv = document.getElementById("mydiv");
// mydiv.innerHTML = "<h3>h1をh3へ変更しました！<h3>";
// }, false);

// document.getElementById("kajaa").addEventListener("click", function(){ 
//   document.getElementById("kajaa").classList("")
// }, false);

