

import {prikaz, start,vodilja,play} from './javascript/prikaz.js'

document.addEventListener('click',prikaz);
document.addEventListener('touchstart',prikaz);
document.addEventListener('DOMContentLoaded',start);
document.addEventListener('mousemove',vodilja);
document.addEventListener('click',play,true);
