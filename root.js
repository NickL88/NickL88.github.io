

import {prikaz, start,vodilja,play,prikaztouchmove} from './javascript/prikaz.js'

document.addEventListener('click',prikaz);
document.addEventListener('touchstart',prikaz);
document.addEventListener('DOMContentLoaded',start);
document.addEventListener('mousemove',vodilja);
document.addEventListener('touchmove',vodilja);
document.addEventListener('click',play,true);
document.addEventListener('mousemove',prikaztouchmove);
document.addEventListener('touchmove',prikaztouchmove);
