const yougo_area = document.getElementById('sample_area');
const yougo_parts = document.getElementsByClassName('sample_part');
const input = document.getElementById('sample_word');



// var elements = document.getElementsByClassName('className');
// var requiredElement = elements[0];

input.addEventListener('input',()=>{
  reset();
  const s_word = input.value;
  if(s_word==''){return}
  const regexp = new RegExp(`(?<=>)[^<>]*?(${s_word})[^<>]*?(?=<)`,'gi');
  const regexp2 = new RegExp(s_word,'gi');
  [...yougo_parts].forEach(part=>{
    part.innerHTML=part.innerHTML.replace(regexp,function(){
      return arguments[0].replace(regexp2,`<span class="highlight">${s_word}</span>`);
    });
  });
});

function reset(){
  console.log('reset');
  [...document.getElementsByClassName('highlight')].forEach(el=>{
    el.outerHTML=el.textContent; // ← 訳) el(highlight 配列の各要素) を outerHTML で消す =  el.textContens(タグ内の文章(タグの影響も受ける)を追加する)
  });
}