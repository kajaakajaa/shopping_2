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
// ------------------------------------------------- 11(関数/html無し/) --------------------------------------------------------
// var test = 100;
// var yassa = 10;

// function bill(pay,waa){
//   console.log(pay - waa);
// };
// bill(test, yassa)


// var test = 100;
// var waa = 10;

// function action(){
//     function bill(pay, yassa){
//         console.log(pay - yassa);
//     }
//     bill(test, waa)
// };
// action()

// ↑ answer : 90


var multiply = function() {
    return 5 * 2;
}
 
console.log(multiply());


// ------------------------------------------------- 10(toggle/ok)  --------------------------------------------------------
// var change = document.getElementById("change");
// change.addEventListener("click", function(){
//     var b_cont = change.value;
//     if(b_cont=="変更前") {
//         // $("#change").val("変更後");
//         change.value = "変更後";
//     }else if(b_cont=="変更後"){
//         $("#change").val("変更前");
//     }
// });
// ------------------------------------------------- 9() --------------------------------------------------------
// スムーズスクロール
// $(function(){
//   $('a[href^="#"]').click(function(){
//     var speed = 500;
//     var href= $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top;
//     $("html, body").animate({scrollTop:position}, speed, "swing");
//     return false;
//   });
// });

// ------------------------------------------------- 8(ok / data属性 js修正 → HTML へ渡す)) --------------------

// $("#kajaa").on("touchstart click", function(){
//   var hoge = $(this).data("yassa");
//         console.log(hoge);
//       hoge = $(this).data("yassa", "kazuhiro");  // HTML data の値を変更。
//       hoge = $(this).data("yassa");
//         console.log(hoge);
//   });
// ------------------------------------------------- 7(ok) --------------------------------------------------------

// $(function(){
//   var kazu = $("#kajaa").data("yassa");
//   console.log(kazu);

//   var hoge = document.getElementById("kajaa");
//   yassa = hoge.dataset.yassa;
//   console.log(kazu == yassa);
// });

// ------------------------------------------------- 6(ok) -----------------------------------------------------

// $(function(){
//   var x = [];

//   var samples = document.getElementsByClassName("sample");
//   samples = Array.from(samples);

//   samples.forEach(function(sample){
//   var kazu = sample.dataset.ka
//     x["kajaa"] = kazu;
//     // console.log(x["kajaa"]);  // data-ka の値 kajaa が出力される。
//   });

//   console.log($(".sample").val())  // valueの値。
//   var kazu = $(x["kajaa"]);  // kazu → class。
//     console.log(kazu.val()); // valueの値。
// });
// ------------------------------------------------- console.logのみ --------------------------------------------------------

// // オブジェクト型
// var x = [1,2,3]
// x1 = x
// console.log(x1);

// x2 = x1
// console.log(x2);

// x2[0] = 2;
// console.log(x2);

// console.log(x1);


// // データ型
// var x = 1;
// x1 = x;
// x2 = x1;
// x2 = 2;

// console.log(x1);
// ------------------------------------------------- 5(ok) --------------------------------------------------------

// $(function(){

//   var x = 1
//   x1 = x;
//   x2 = x1;
//   x2 = 2;
//   kajaa = x1 + x2 + "円";

//   var td = document.getElementById("td");
//   td.innerText = kajaa;
//   console.log(td.innerText);

// });

// ------------------------------------------------- 4(ok) --------------------------------------------------------

// Array.from() → ()内を配列化する。
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

// --------------------------------------- 2() ------------------------------------------------------------------

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

