//Ohjelmointi.html

//console.log(document.querySelector('#kentta').type);
//console.log(document.guerySelector('lisaanappi').value);

document.guerySelector('.lisaanappi').addEventListener('click', e=>{e.preventDefault();

console.log(document.guerySelector('#kentta').value);

document.guerySelector('.ilmoitus').innerHTML="Kentän sisältö on: <b>"+document.querySelector('#kentta').value+"<b>";

setTimeout(() => document.querySelector('.ilmoitus').innerHTML='',3000);
});

document.querySelector('.merkinta').addEventListener('click',e =>{
  e.preventDefault();
  console.log("nappi toimii!");

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
});