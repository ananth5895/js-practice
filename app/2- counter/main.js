let token = 0;
let mybuttonElement =document.getElementById('counter');
let displayElement1 = document.getElementById('display-1');
mybuttonElement.addEventListener('click',function(){
token = token+1;
displayElement1.innerHTML = token;

});