// document.getElementById("kajaa").addEventListener("click", function(){ 
// // var mydiv = document.getElementById("mydiv");
// // mydiv.innerHTML = "<h3>h1をh3へ変更しました！<h3>";
// // }, false);


// ---------------------------------------------------------------------------------------------------------


// const push = document.getElementById("push");

// push.addEventListener("click", function(e){
//   const look = document.getElementById("h").innerHTML;

//   if(look=="変更前"){
//     document.getElementById("h").innerHTML = "<h2>変更されました</h2>";
//   }else if(look=="<h2>変更されました</h2>"){
//     document.getElementById("h").innerHTML = "変更前";
//   }
// });

// ---------------------------------------------------------------------------------------------------------

// var ka = document.getElementById("ka");
// console.log("ka");

// ---------------------------------------------------------------------------------------------------------

document.getElementById("str").addEventListener("keyup", function(e){ // ← "str" IDの要素(タグ)を取得してそれの "イベント発動条件" を "change" とする。
  var str = document.getElementById("str"); // "str" を変数化する。
  str.nextSibling.textContent = str.value;  // ID "str" の要素内の文字列を "str.value (※〇〇.valueプラウザ上のフォームの値に指定するという意味)" に当てはめる。
});

