const yougo_area = document.getElementById('sample_area');
const yougo_parts = document.getElementsByClassName('sample_part');
const input = document.getElementById('sample_word');



// var elements = document.getElementsByClassName('className');
// var requiredElement = elements[0];

input.addEventListener('input',()=>{
  reset();
  const sword = input.value;
  if(sword==''){return}
  const regexp = new RegExp(`(?<=>)[^<>]*?(${sword})[^<>]*?(?=<)`,'gi');
  const regexp2 = new RegExp(sword,'gi');
  [...yougo_parts].forEach(part=>{
    console.log([...yougo_parts])
      console.log([...yougo_parts])
      part.innerHTML=part.innerHTML.replace(regexp,function(){
        return arguments[0].replace(regexp2,`<span class="highlight">${sword}</span>`);
    });
  });
});

function reset(){
  console.log('reset');
  [...document.getElementsByClassName('highlight')].forEach(el=>{
    el.outerHTML=el.textContent;
  });
}