<script>
var number1,islem,number2,sonuc,cevapla,dogru,yanlis;
number1=document.getElementById("number1");
islem=document.getElementById("islem");
number2=document.getElementById("number2");
sonuc=document.getElementById("sonuc");
cevapla=document.getElementById("cevapla");
dogru=document.getElementById("dogru");
yanlis=document.getElementById("yanlis");

function sayirandom(min,max){
var a;
a=(Math.floor(Math.random()*(max-min)))+min;
return a;
}
function yenisoru(){
var b;
b=["+","-","*","/"];
islem.textContent=b[sayirandom(0,4)];
number1.textContent=sayirandom(0,50);
number2.textContent=sayirandom(0,50);

if(islem.textContent=="/"){

while(true){
number2.textContent=sayirandom(0,50);
if(number1.textContent%number2.textContent==0)
{break;}}}
}

window.onload=function(){
yenisoru();
}

result.onclick=function(){
var cvp,sy1,sy2;
sy1=Number(number1.textContent);
sy2=Number(number2.textContent);

switch(islem.textContent){
case '+':cvp=sy1+sy2;break;
case '-':cvp=sy1-sy2;break;
case '*':cvp=sy1*sy2;break;
case '/':cvp=sy1/sy2;break;
default: break;
}
if(sonuc.value==cvp){
dogru.textContent=Number(dogru.textContent)+1;
}
else{
yanlis.textContent=Number(yanlis.textContent)+1;
}
 
yenisoru(); 
}
 

</script>