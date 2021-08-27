
//console.log(document.querySelector('#lomake').type);
//console.log(document.querySelector('.lomaketieto').value);

document.querySelector('.lomaketieto').addEventListener('click', e=>{e.preventDefault();
console.log("toimii");

//console.log(document.querySelector('#lomake').value);

document.querySelector('.lisattytieto').innerHTML=
document.querySelector('#Nimi').value+document.querySelector('#Tieto').value;

if(document.querySelector('#Nimi').value==""|| document.querySelector('#Tieto').value=="")document.querySelector('.varoitus').innerHTML='Täytä kaikki kentät!'
});
setTimeout(() =>document.querySelector('.varoitus')
.innerHTML='', 3000);
//}
//document.querySelector('.merkki').addEventListener('click', e=>{e.preventDefault();
//console.log("toimii");
//});
document.querySelector('.merkki').addEventListener('click',e=>{
  e.preventDefault();
//console.log("tunnit pidetty!");

if(document.querySelector('#Html').checked){
  document.querySelector('.lista').children[0].innerHTML='<input type="checkbox" id="Html" checked> HTML tunnin pidetty';
}
else{
  document.querySelector('.lista').children[0].innerHTML ='<input type="checkbox"id="Html"> HTML';
}

if(document.querySelector('#CSS').checked){
  document.querySelector('.lista').children[1].innerHTML='<input type="checkbox" id="CSS" checked> CSS tunnit pidetty';
}
else{
  document.querySelector('.lista').children[1].innerHTML ='<input type="checkbox" id="CSS"> CSS';
}

if(document.querySelector('#JavaScript').checked){
  document.querySelector('.lista').children[2].innerHTML='<input type="checkbox" id="JavaScript" checked> JavaScript tunnit pidetty';
}
else{
  document.querySelector('.lista').children[2].innerHTML ='<input type="checkbox" id="JavaScript"> JavaScript';
}
if(document.querySelector('#CICD').checked){
  document.querySelector('.lista').children[3].innerHTML='<input type="checkbox" id="CICD"checked> CI/CD tunnit pidetty';
}
else{
  document.querySelector('.lista').children[3].innerHTML ='<input type="checkbox" id="CICD"> CI/CD';
}
});