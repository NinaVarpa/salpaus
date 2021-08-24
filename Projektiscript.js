//console.log(document.querySelector('#Nimi').type):
//console.log(document.querySelector('.lomake).value);
document.querySelector('.lomake').addEventListener('click', e=>{e.preventDefault();


document.guerySelector('.vastaus').addEventListener('click',e=>{
  e.preventDefault();
console.log("tunnit pidetty!");

if(document.querySelector('#Hmtl').checked){document.querySelector('lomakee').children[0].innerHTML='<div class="lomakee"><input type="checkbox"id="Html"checked>HTML tunnit pidetty!</div>';
}
  else{
    document.querySelector('.Html').children[0].innerHTML = '<div class="lomakee"><input type="checbox"id="Html">HTML</div>';
  }