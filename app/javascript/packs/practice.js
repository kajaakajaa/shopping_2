// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------
// -------------------------------------------------  --------------------------------------------------------

$(function(){

  var kajaa = document.getElementById("kajaa");
  console.log(kajaa.innerText);

});

// ------------------------------------------------- 4(ok) --------------------------------------------------------

// console.log(Array.from('foo'));

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

// --------------------------------------- 1 ------------------------------------------------------------------

// document.getElementById("str").addEventListener("keyup", function(e){ // ← inputフォーム "str" IDの要素(タグ)を取得してそれの "イベント発動条件" を "keyup" とする。
//   var str = document.getElementById("str"); // "str" を変数化する。
//   str.nextSibling.textContent = str.value;  // ID "str" の要素内の文字列を "str.value (※〇〇.valueプラウザ上のフォームの値に指定するという意味)" に当てはめる。
// });

// ---------------------------------------------------------------------------------------------------------
// const targets = document.getElementsByClassName("target");

// for(let i = 0; i < targets.length; i++){
  
//   //クリックイベントでアラートを表示する
//   targets[i].addEventListener('click', () => {
//         alert(i + `をクリックしました`);

// }, false);

// --------------------------------------- 2 ------------------------------------------------------------------

// const targets = document.getElementsByClassName("target");

// for(let i = 0; i < targets.length; i++){
//   targets[i].addEventListener("keyup", function(e){
//     alert(i + "　をクリックしましたヨホホいほい！");

//   }, false);
// }
// ------------------------------------------------- 3() --------------------------------------------------------

// var parent = document.getElementById("parent");
// var child = document.getElementById("child");

//   parent.addEventListener("click", function(){
//   alert("親のクリックイベント");
//   });

//   child.addEventListener("click", function(e){
//   alert("子のクリックイベント");
//     e.stopPropagation()
//   });

