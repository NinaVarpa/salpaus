
//console.log(document.querySelector('#lomake').type);
//console.log(document.querySelector('.lomaketieto').value);

document.querySelector('.lomaketieto').addEventListener('click', e=>{e.preventDefault();
console.log("toimii");
//});

//console.log(document.querySelector('#lomake').value);

//if(document.querySelector('#lomake').checked

document.querySelector('.lisatty tieto').innerHTML=
"<b>da daa</b>"+document.querySelector('#Nimi').value;
});
//console.log('hap');

//setTimeout(() =>document.querySelector('.laatikko')
//.innerHTML='', 5000);
//}
//document.querySelector('.lomakee').addEventListener('click', e=>{e.preventDefault();
//console.log("toimii");
//});
document.querySelector('.vastaus').addEventListener('click',e=>{
  e.preventDefault();
//console.log("tunnit pidetty!");

if(document.querySelector('#Html').checked){
  console.log('hip');
  document.querySelector('.lomakee').children[0].innerHTML='<li class="lomakee"><input type="checkbox" id="Html" checked>HTML tunnit pidetty!</li>';
}
else{
  console.log('hop');
  document.querySelector('.lomakee').children[0].innerHTML ='<li class="lomakee"><input type="checkbox"id="Html">HTML</li>';
}

if(document.querySelector('#CSS').checked){
  console.log('hip');
  document.querySelector('.lomakee').children[1].innerHTML='<li class="lomakee"><input type="checkbox" id="CSS" checked>CSS tunnit pidetty!</li>';
}
else{
  console.log('hop');
  document.querySelector('.lomakee').children[1].innerHTML ='<li class="lomakee"><input type="checkbox"id="CSS">CSS</li>';
}
if(document.querySelector('#JavaScript').checked){
  console.log('hip');
  document.querySelector('.lomakee').children[2].innerHTML='<li class="lomakee"><input type="checkbox" id="JavaScript" checked>JavaScript tunnit pidetty!</li>';
}
else{
  console.log('hop');
  document.querySelector('.lomakee').children[2].innerHTML ='<li class="lomakee"><input type="checkbox"id="JavaScript">JavaScript</li>';
}
if(document.querySelector('#CICD').checked){
  console.log('hip');
  document.querySelector('.lomakee').children[3].innerHTML='<li class="lomakee"><input type="checkbox" id="CICD" checked>CI/CD tunnit pidetty!</li>';
}
else{
  console.log('hop');
  document.querySelector('.lomakee').children[3].innerHTML ='<li class="lomakee"><input type="checkbox"id="CICD">CI/CD</li>';
}
});