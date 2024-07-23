import { fetchlistenerInput } from "./fetch.js";



function prikaz(event) {
  let level;
  const menu=document.getElementById("menu");
  if ([...event.currentTarget.querySelectorAll("nav li")].some(function (comp) {
    return comp == event.target;
  })) {
    const id = [...event.currentTarget.querySelectorAll("nav li")].indexOf(event.target);
    const content = document.getElementById("content");

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
        let content = menu.createElement("div");
        fetchlistenerInput('./sites/strojarstvo/programiranje.html', content);
    }

  }


}





function start() {
  console.log("bok");
  fetchlistenerInput('./start.html', document.getElementById("menu"));

}




export { prikaz, start };