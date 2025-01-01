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


var xcoord;
var ycoord;

function prikaztouchmove(event) {
const koordinata = document.getElementById("testing");
const rect = koordinata.getBoundingClientRect();
//let offsetX=event.clientX - rect.left;
//let offsetY=event.clientY - rect.top;
let offsetX=event.offsetX;
let offsetY=event.offsetY;

koordinata.innerText="("+offsetX+','+offsetY+')';

}

function vodilja(event) {
  if (event.type === 'touchmove') {
    event = event.touches[0];
  }
  if ([...event.currentTarget.querySelectorAll("#svg")].some(function (comp) {
    return comp == event.target;
  })) {
    //const rect = crta.getBoundingClientRect();
    //event.target.style.backgroundColor="green";
    const svg = document.getElementById("svg");
    const tocka = svg.createSVGPoint();
    tocka.x = xcoord = event.offsetX;
    tocka.y = ycoord = event.offsetY;
    //crta.points.appendItem(tocka);
    //tocka.y -=  svg.getBoundingClientRect().height/2;
    //crta.points += event.offsetX+","+event.offsetY;
    //console.log(crta.points.getItem(0));
    //console.log("linija:(" + tocka.x+","+ tocka.y + ")");
    //console.log(crta.points.getItem(crta.points.length - 1).x);
    //const der = document.getElementById("der1");
    //const deriv = document.getElementById("deriv");
    //const tocka_der = der.createSVGPoint();
    ////treba uvesti 0 kod uzimanja prve vrijednosti
    ////
    //const y2 = crta.points.getItem(crta.points.length - 1).y;
    //const y1 = crta.points.getItem(crta.points.length - 2).y;
    //const x2 = crta.points.getItem(crta.points.length - 1).x;
    //const x1 = crta.points.getItem(crta.points.length - 2).x;
    //tocka_der.y = ((y2 - y1) / (x2 - x1))*100;
    ////tocka_der.y = (crta.points.getItem(crta.points.length-1).y-crta.points.getItem(crta.points.length-2).y)/(crta.points.getItem(crta.points.length-1).x-crta.points.getItem(crta.points.length-2).x);
    //tocka_der.x = x1+(x2-x1)/ 2;
    //console.log("derivacija:(" + tocka_der.x+","+ tocka_der.y + ")");
    ////deriv.points.appendItem(tocka_der);
    //const int = document.getElementById("int");
    //const integ = document.getElementById("integ");
    //const tocka_int = int.createSVGPoint();
    //tocka_int.y = integ.points.getItem(integ.points.length - 1).y + ((y2 + y1)*(x2-x1)/2)/100;
    //tocka_int.x = x1+(x2-x1)/2;
    //console.log("integracija:(" + tocka_int.x+","+ tocka_int.y + ")");
    ////integ.points.appendItem(tocka_int);
  }

}


var id;
var check = false;
var pos = 0;
function play(event) {
  if ([...event.currentTarget.querySelectorAll("#svg")].some(function (comp) {
    return comp == event.target;
  })) {
    if (!check) {
      console.log("abcd");
      const crta = document.getElementById("crta");
      //event.target.parentElement.style.backgroundColor="red";
      //let pos = 0; //trenutak 0
      //let pos0 = crta.points.getItem(crta.points.length - 1); //dohvacanje zadnje tocke polyline
      //let pos0 = crta.points.getItem(crta.points.length - 1); //dohvacanje zadnje tocke polyline
      //let posx0 = pos0.x; //dohvacanje x koordinate zadnje tocke polyline
      //console.log(posx0);
      //frame();
      const svg = document.getElementById("svg");
      const der = document.getElementById("der1");
      const int = document.getElementById("int");
      const deriv = document.getElementById("deriv");
      const integ = document.getElementById("integ");
      const interval = 10;

      function frame() {
        pos = pos - interval;
        //let pos1 = crta.points.getItem(crta.points.length - 1);
        //let posx = pos1.x;
        //let posy = pos1.y;
        //console.log("pozicija" + pos1);
        svg.style.left = pos + 'px';//element sliding
        der.style.left = pos + 'px';
        int.style.left = pos + 'px';
        console.log(svg.getBoundingClientRect().width);
        let width = svg.getBoundingClientRect().width + interval;
        console.log(width);
        svg.style.width =
          der.style.width =
          int.style.width = width + 'px';
        const tocka = svg.createSVGPoint();
        //tocka.x = posx + interval;
        tocka.x = xcoord + interval;
        //console.log(tocka.x + "=" + posx0 + pos);
        //tocka.y = posy;
        tocka.y = ycoord;
        console.log("xcoord" + xcoord + "ycoord" + ycoord);
        crta.points.appendItem(tocka);
        tocka.y -= svg.getBoundingClientRect().height / 2;
        //console.log("posx" + posx + "posx0" + posx0);
        //crta.points.baseVal.value =pos1-pos;
        //crta.points += event.xcoord+","+event.ycoord;
        //console.log(crta.points.getItem(0));
        //console.log("linija:(" + tocka.x+","+ tocka.y + ")");
        //console.log(crta.points.getItem(crta.points.length - 1).x);
        const tocka_der = der.createSVGPoint();
        //treba uvesti 0 kod uzimanja prve vrijednosti
        //
        const y2 = crta.points.getItem(crta.points.length - 1).y;
        const y1 = crta.points.getItem(crta.points.length - 2).y;
        const x2 = crta.points.getItem(crta.points.length - 1).x;
        const x1 = crta.points.getItem(crta.points.length - 2).x;
        //tocka_der.y = ((y2 - y1) / (x2 - x1)) * 100;
        tocka_der.y = ((y2 - y1)*Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)) /((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))) * 100;
        //tocka_der.y = (crta.points.getItem(crta.points.length-1).y-crta.points.getItem(crta.points.length-2).y)/(crta.points.getItem(crta.points.length-1).x-crta.points.getItem(crta.points.length-2).x);
        tocka_der.x = x1 + (x2 - x1) / 2;
        console.log("derivacija:(" + tocka_der.x + "," + tocka_der.y + ")");
        deriv.points.appendItem(tocka_der);
        const tocka_int = int.createSVGPoint();
        tocka_int.y = integ.points.getItem(integ.points.length - 1).y + ((y2 + y1) * (x2 - x1) / 2) / 100;
        tocka_int.x = x1 + (x2 - x1) / 2;
        console.log("integracija:(" + tocka_int.x + "," + tocka_int.y + ")");
        integ.points.appendItem(tocka_int);       //crta.x1.baseVal.Value=pos;
      }


      id = setInterval(frame, 100);
      check = true;
      return;
    }
    if (check) {
      clearInterval(id);
      check = false;
      return;
    }
  }
  //event.currentTarget.removeEventListener('click', play, false);
}




export { prikaz, start, vodilja, play, prikaztouchmove };