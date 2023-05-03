let mora9aba1 = document.getElementById('mora9aba1');
let mora9aba2 = document.getElementById('mora9aba2');
let ljihawi = document.getElementById('ljihawi');
let lwatani = document.getElementById('lwatani');
let lmo3adal = document.getElementById('mo3adal');
let inputs = document.querySelectorAll('.inputs');

function Mo3adal(){
  let result = (mora9aba1.value + mora9aba2)* 0.25 + ljihawi.value * 0.25 + lwatani.value * 0.5 ;
  return result ;
}

function LimitInput(){
  for (let input of inputs){
    input.addEventListener('input' , function(){
      input.value = input.value.slice(0,5);
      if(input.value > 20){
        input.style.border = "1px solid red";
        input.style.outline = "1px solid red";
      }
      else {
        input.style.border = "1px solid black";
        input.style.outline = "1px solid black";
      }
    })
  }
}
LimitInput();


