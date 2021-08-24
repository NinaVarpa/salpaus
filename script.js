function laskutehtava(ekaArvo,tokaArvo){
 return ekaArvo + tokaArvo;
}
//function pvmfin(teksti,vuosi,kk,pv){
 // return teksti+"."pv+"."+kk+"."+vuosi;
//}
//function pvmfin(vuosi, kk, pv){
 //if(kk==03|| kk==04|| kk==05){
 // return "kevät:"+pv+"."+kk+"."+vuosi;
//
//function pvmfin(vuosi,kk,pv){
//  if(kk==06|| kk==07|| kk==08){
//  return "kesä:"+pv+"."+kk+"."+vuosi;
//}
//function pvmfin(vuosi,kk,pv){
 // if(kk==09|| kk==10|| kk==11){
// return "syksy:"+pv+"."+kk+"."+vuosi;
//}
//function pvmfin(vuosi,kk,pv){
 // if(kk==12|| kk==01|| kk==02){
//  return "Talvi:"+pv+"."+kk+"."+vuosi;
//}
//}
console.log("Täällä ollaan!");
let ika=44;//numerot kirjoitetaan ilman lainausmerkkejä
ika= ika+1;//integer (int)

let ikakirjaimina="44";//string (str)
ikakirjaimina=ikakirjaimina +1;

console.log(ikakirjaimina);

console.log("Sinun ikäsi on"+ika);

let juuvaiei=true;//boolen

console.log(juuvaiei);

let nimi="Ninnu Vaan"

console.log("Kirjoita isolla:"+nimi.toUpperCase());

console.log("Splittausharjoitus:"+nimi.split("")[0] );

//while ja for loop:

for(let i=0; i<=10; i++){
  console.log("Loopin interaatioluku on:"+ i);
}

if(ika >=18||nimi==="Ninnu Vaan"){
  console.log("Onnea, olet täysi-ikäinen ja/tai olet Ninnu!");
}
else if(ika=== 18 && nimi =="Keijo"){
  console.log("Onnea Keijo, olet juuri ja juuri täysi-ikäinen!");
}
else{
 console.error("kasva vielä vähän.....");
}

console.log(laskutehtava(927874287,9487342));

let pvm="2021/08/18";

console.log(pvmfin(pvm.split("/")[0],pvm.split("/")[1],pvm.split("/")[2],pvm.split("/")));
 
for(let i=1; i<=15;i++){
  console.log(i+""+pvmFin(pvm.split("/")[0],pvm.split("/")[1],pvm.split("/")[2]
  ));
}


/*
monen
rivin
kommentti
*/

//Ohjelmointi.html

//console.log(document.querySelector('#kentta').type);
//console.log(document.guerySelector('lisaanappi').value);

//document.guerySelector('.lisaanappi').addEventListener('clikc',e=>{e.preventDefault();

//console.log(document.guerySelector('#kentta).value);

//document.guerySelector('.ilmoitus').innerHTML="<b>Moikka</b>"+document.querySelector('#kentta').value;

//setTimeout(() => document.querySelector('.ilmoitus').innerHTML='',3000);
//});

//document.querySelector('.merkinta').addEventListener('click',e =>{
 // e.preventDefault();
 // console.log("nappi toimii!");

  //if(document.querySelector('#teht_a').checked){document.querySelector('.boksit').children[0].inner.innerHTML='<li class"sisalto"><input type="checkbox id="teht_a"checked>Tehtävä A on tehty!</li>';
 // }
  //else{
   // document.guerySelector('.boksit').children[0].innerHTML='<li class="sisalto"><input type="checkbox" id="teht_a">Tehtävä A</li>';
 // }
  // if(document.querySelector('#teht_b').checked){document.querySelector('.boksit').children[0].inner.innerHTML='<li class"sisalto"><input type="checkbox id="teht_b"checked>Tehtävä B on tehty!</li>';
  //}
 // else{
  //  document.guerySelector('.boksit').children[0].innerHTML='<li class="sisalto"><input type="checkbox" id="teht_b">Tehtävä B</li>';
//  }
//});