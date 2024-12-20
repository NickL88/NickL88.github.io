import { fetchlistenerInput } from "./fetch.js";



function prikaz(event) {
  let level;
  const menu = document.getElementById("menu");
  let div = document.getElementById("sadrzaj");
  const content = document.getElementById("content");
  console.log(div);
  if (div != null) {
    console.log(div);
    div.innerHTML = "";
    document.getElementById("sadrzaj").remove();
  }
  //Main menu
  if ([...event.currentTarget.querySelectorAll("nav li")].some(function (comp) {
    return comp == event.target;
  })) {
    const id = [...event.currentTarget.querySelectorAll("nav li")].indexOf(event.target);

    switch (id) {
      case 0:
        fetchlistenerInput('./sites/strojarstvo/strojarstvo.html', content);
        break;
      case 1:
        fetchlistenerInput('./sites/3dmodeliranje/3dmodeliranje.html', content);
        break;
      case 2:
        fetchlistenerInput('./sites/programiranje/programiranje.html', content);
        break;
    }
  }
  //Main submenu

  if ([...event.currentTarget.querySelectorAll("#kinematika")].some(function (comp) {
    return comp == event.target;
  })) {
    const id = [...event.currentTarget.querySelectorAll("nav li li")];
    fetchlistenerInput('./sites/strojarstvo/kinematika.html', content);
  }


  //Smartphone menu
  if ([...event.currentTarget.querySelectorAll("menu>ul>li>ul>li")].some(function (comp) {
    return comp == event.target;
  })) {
    switch (event.target.id) {
      case "natrag":
        fetchlistenerInput('./start.html', menu);
        break;
      case "doma":
        fetchlistenerInput('./start.html', menu);
        break;
      case "stroj":
        fetchlistenerInput('./menu/strojarstvo/strojarstvo.html', menu);
        break;
      case "3dmodel":
        fetchlistenerInput('./menu/3dmodeliranje/3dmodeliranje.html', menu);
        break;
      case "prog":
        fetchlistenerInput('./menu/programiranje/programiranje.html', menu);
        break;
      case "meha_flui":
        content = document.createElement("div");
        content.id = 'sadrzaj';
        content.style.backgroundColor = "white";
        fetchlistenerInput('./sites/strojarstvo/mehanika_fluida.html', content);
        document.querySelector("#meha_flui").after(content);
    }

  }


}





function start() {
  fetchlistenerInput('./start.html', document.getElementById("menu"));

}

function vodilja(event) {
  if ([...event.currentTarget.querySelectorAll("svg")].some(function (comp) {
    return comp == event.target;
  })) {
    const crta = document.getElementById("crta");
    console.log(event.clientX);
    //event.target.style.backgroundColor="green";
    crta.x2.baseVal.value = event.offsetX;
    crta.y2.baseVal.value = event.offsetY;
    console.log("abcd");
  }

}

function play1() {

}

var id;

function play(event) {
  if ([...event.currentTarget.querySelectorAll("#crta")].some(function (comp) {
    return comp == event.target;
  })) {
    console.log("abcd");
    const crta = document.getElementById("crta");
    //event.target.parentElement.style.backgroundColor="red";
    //id = setInterval(frame, 10);
    let pos = crta.x2.baseVal.value;
    console.log(pos);
    frame();
    function frame() {
      console.log("pozicija"+pos);
        //pos=pos-20;
        event.target.parentElement.style.left = pos +'px';
    //crta.x2.baseVal.value +=-pos;
    }
  }
}




export { prikaz, start, vodilja,play};