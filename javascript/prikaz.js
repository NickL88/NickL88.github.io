import { fetchlistenerInput } from "./fetch.js";



function prikaz(event) {
  let level;
  const menu=document.getElementById("menu");
  let div = document.getElementById("sadrzaj");
  console.log(div);
  if (div != null){
    console.log(div);
    div.innerHTML= "";
    document.getElementById("sadrzaj").remove();
  }
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
        let content = document.createElement("div");
        content.id='sadrzaj';
        content.style.backgroundColor="white";
        fetchlistenerInput('./sites/strojarstvo/mehanika_fluida.html', content);
        document.querySelector("#meha_flui").after(content);
    }

  }


}





function start() {
  fetchlistenerInput('./start.html', document.getElementById("menu"));

}




export { prikaz, start };