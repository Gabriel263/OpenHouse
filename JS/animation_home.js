function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var coords = [];
var coords2 = [];
var x=0,y=0;

while (x<2000) {//250 estrelas
  var num = getRandomInt(10,2000);/*Eixo x */
  var num2 = getRandomInt(10,2000);/*Eixo y */
  coords.push((String(num)+"px"+" "+String(num2)+"px"+" "+"#fff"));
  x++;
}

while (y<2000) {//250 estrelas
  var num = getRandomInt(10,2000);/*Eixo x */
  var num2 = getRandomInt(10,2000);/*Eixo y */
  coords2.push((String(num)+"px"+" "+String(num2)+"px"+" "+"#fff"));
  y++;
}

document.getElementById("stars").style.boxShadow = coords;
document.getElementById("stars2").style.boxShadow = coords2;
