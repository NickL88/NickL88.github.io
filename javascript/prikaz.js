import {fetchlistenerInput} from "./fetch.js";


function prikaz(event){
  if ([...event.currentTarget.querySelectorAll("nav li")].some(function (comp){
    return comp == event.target;
  }))
  var id = [...event.currentTarget.querySelectorAll("nav li")].indexOf(event.target);
  console.log(id);


  switch(id){
    case 0:
      fetchlistenerInput('./sites/strojarstvo/strojarstvo.html');
      break;
    case 1:
      fetchlistenerInput('./sites/3dmodeliranje/3dmodeliranje.html');
      break;
      case 2:
      fetchlistenerInput('./sites/programiranje/programiranje.html');
      break;
  }

  
}
    




function selectContent(){

}




export {prikaz};