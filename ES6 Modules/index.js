/*
ES6 Module = zewnetrzny plik zawierajacy reużytkowalny kod
który moze byc zaimportowany do innych plikow JS
Umozliwia pisanie reuzytkowalnego kodu do wielu aplikcaji
moze zawierac zmienne, klasy, funkcje itp
*/


import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';


console.log(PI)

const circumference = getCircumference(10);
console.log(circumference.toFixed(2))

const area = getArea(5);
console.log(area.toFixed(2))

const volume = getVolume(10);
console.log(volume.toFixed(2))
