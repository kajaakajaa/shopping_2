$(function(){
  const conainer = document.getElementById('sample_area');
  // const div_parts = document.getElementsByClassName('sample_part');
  const input = document.getElementById('#sample_word');


// スムーズスクロール + ハイライト検索 の応用

  input.addEventListener('input',()=>{
    reset();
    const s_word = input.value;
    if(s_word==''){return}
    const regexp = new RegExp(`(?<=>)[^<>]*?(${s_word})[^<>]*?(?=<)`,'gi');
    const regexp2 = new RegExp(s_word,'gi');
    conainer.innerHTML = conainer.innerHTML.replace(regexp,function(){
        return arguments[0].replace(regexp2,`<a class="highlight" id="jump">${s_word}</a>`);
    });

    var speed = 500;
    var id= $(this).attr("id");
    var target = $(id == "#" || id == "" ? 'html' : id);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

// ハイライト検索
// input.addEventListener('input',()=>{
//   reset();
//   const s_word = input.value;
//   if(s_word==''){return}
//   const regexp = new RegExp(`(?<=>)[^<>]*?(${s_word})[^<>]*?(?=<)`,'gi');
//   const regexp2 = new RegExp(s_word,'gi');
//   conainer.innerHTML = conainer.innerHTML.replace(regexp,function(){
//       return arguments[0].replace(regexp2,`<a class="highlight" id="jump">${s_word}</a>`);
//   });
//   // [...div_parts].forEach(part=>{
//   //   part.innerHTML=part.innerHTML.replace(regexp,function(){
//   //     return arguments[0].replace(regexp2,`<a class="highlight" id="jump">${s_word}</a>`);
//   //   });
//   // });
// });

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

  function reset(){
    console.log('reset');
    [...document.getElementsByClassName('highlight')].forEach(el=>{
      el.outerHTML=el.textContent; // ← 訳) el(highlight 配列の各要素) を outerHTML で消す =  el.textContens(タグ内の文章(タグの影響も受ける)を追加する)
      console.log(el)
    });
  }
});
