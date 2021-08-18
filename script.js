function laskutehtava(ekaArvo,tokaArvo){
  return ekaArvo + tokaArvo;
}
function pvmFin(vuosi,kk,pv){
  return pv+kk+vuosi;
}

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
  console.log("Loopin interaatioluku on:"+i);
}

if(ika >=18||nimi== "Ninnu Vaan"){
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

console.log(pvmfin(pvm.split("/")[0],...[1]...[2]));
for (let i=1;i<=15;i++){
  console.log("loopin internaalioluku on:"+1)
}


/*
monen
rivin
kommentti
*/