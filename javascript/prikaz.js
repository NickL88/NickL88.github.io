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
var xcheck;

function prikaztouchmove(event) {
  if (event.type === 'touchmove') {
    event = event.touches[0];
  }
  const koordinata = document.getElementById("testing");
  const svg = document.getElementById("svg");
  const rect = svg.getBoundingClientRect();
  let offsetX = event.clientX;   //lega elementa
  let offsetY = event.clientY;
  let offsetX0 = event.clientX - rect.left; //stevilke na elementu
  let offsetY0 = event.clientY - rect.top;
  offsetY0 -= rect.height / 2;
  offsetY0 = -offsetY0;
  offsetX += 5;   //da element ni direktno pod misko
  offsetY += 5;
  koordinata.style.left = offsetX + "px";
  koordinata.style.top = offsetY + "px";
  //console.log("top" + koordinata.style.top);

  koordinata.innerText = "(" + Math.round(offsetX0) + ',' + Math.round(offsetY0) + ')';
  //console.log("xcoord" + offsetX0 + "ycoord" + offsetY0);
  console.log("prikaztouchmove" + event);

}

function vodilja(event) {
  console.log(event);
  if (event.type === 'touchmove') {
    event = event.touches[0];
       const svg = document.getElementById("svg");
      const rect = svg.getBoundingClientRect();
      //const tocka = svg.createSVGPoint();
      //tocka.x = 
      let offsetX = event.clientX - rect.left;
      let offsetY = event.clientY - rect.top;
      xcoord = event.clientX - rect.left;
      //tocka.y = 
      ycoord = event.clientY - rect.top;
      console.log("xcoord" + offsetX + "ycoord" + offsetY);   console.log(event);
  } else {
    if ([...event.currentTarget.querySelectorAll("#svg")].some(function (comp) {
      return comp == event.target;
    })) {
      const svg = document.getElementById("svg");
      const rect = svg.getBoundingClientRect();
      //const tocka = svg.createSVGPoint();
      //tocka.x = 
      let offsetX = event.clientX - rect.left;
      let offsetY = event.clientY - rect.top;
      xcoord = event.clientX - rect.left;
      //tocka.y = 
      ycoord = event.clientY - rect.top;
      console.log("xcoord" + offsetX + "ycoord" + offsetY);
    }
  }
}


//var id;
var check = false;
var pos = 0;
let myReq;
function play(event) {
  if (event.type === 'touch') {
    event = event.touches[0];
    console.log(event);
    event.currentTarget = event.target;
  }
  if ([...event.currentTarget.querySelectorAll("#svg")].some(function (comp) {
    return comp == event.target;
  })) {
    check = !check;
    console.log("check" + check);
    const crta = document.getElementById("crta");
    const svg = document.getElementById("svg");
    const der = document.getElementById("der1");
    const int = document.getElementById("int");
    const deriv = document.getElementById("deriv");
    const integ = document.getElementById("integ");
    const interval = 1;
    if (!check) {
      cancelAnimationFrame(myReq);
      //check = true;
      return;
    }

    let start;

    function frame(timestamp) {
      if (start === undefined) {
        start = timestamp;
      }
      let elapsed = timestamp - start;
      pos = pos - interval;
      svg.style.left = pos + 'px';//element sliding
      der.style.left = pos + 'px';
      int.style.left = pos + 'px';
      //console.log(svg.getBoundingClientRect().width);
      let width = svg.getBoundingClientRect().width + interval;
      //console.log(width);
      svg.style.width =
        der.style.width =
        int.style.width = width + 'px';
      const tocka = svg.createSVGPoint();
      if (xcheck === xcoord) {
        console.log("xcheck");
        xcoord += interval
      }
      tocka.x = xcoord + interval;
      tocka.y = ycoord;
      console.log("xcoord" + xcoord + "ycoord" + ycoord);
      //console.log("tocka" + tocka.x);
      crta.points.appendItem(tocka);
      tocka.y -= svg.getBoundingClientRect().height / 2;
      const tocka_der = der.createSVGPoint();
      const y2 = crta.points.getItem(crta.points.length - 1).y;
      const y1 = crta.points.getItem(crta.points.length - 2).y;
      const x2 = crta.points.getItem(crta.points.length - 1).x;
      const x1 = crta.points.getItem(crta.points.length - 2).x;
      //tocka_der.y = ((y2 - y1) / (x2 - x1)) * 100;
      tocka_der.y = ((y2 - y1) * Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / ((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))) * 100;
      tocka_der.x = x1 + (x2 - x1) / 2;
      //console.log("derivacija:(" + tocka_der.x + "," + tocka_der.y + ")");
      deriv.points.appendItem(tocka_der);
      const tocka_int = int.createSVGPoint();
      tocka_int.y = integ.points.getItem(integ.points.length - 1).y + ((y2 + y1) * (x2 - x1) / 2) / 100;
      tocka_int.x = x1 + (x2 - x1) / 2;
      //console.log("integracija:(" + tocka_int.x + "," + tocka_int.y + ")");
      integ.points.appendItem(tocka_int);       //crta.x1.baseVal.Value=pos;
      //console.log("lapse"+elapsed);
      myReq = requestAnimationFrame(frame);
      if (elapsed > 100) {
        start = timestamp;
      }
      xcheck = xcoord;
    }


    //id = setInterval(frame, 100);
    if (check) {
      myReq = requestAnimationFrame(frame);
      //check = false;
      return;
    }
  }
  //event.currentTarget.removeEventListener('click', play, false);
}




export { prikaz, start, vodilja, play, prikaztouchmove };