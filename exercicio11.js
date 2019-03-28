//Feito por Jonathas Veras; Data: 27/3/2019.
//imcompleto

var x = parseFloat(27.47);
var resto100 = parseInt(x/100);
console.log(resto100);
var resto50 = parseInt((x%100)/50);
console.log(resto50);
var resto20 = parseInt((x%100)%50/20);
console.log(resto20);
var resto10 = parseInt(((x%100)%50%20)/10)
console.log(resto10);
var resto5 = parseInt(((((x%100)%50%20)%10)/5));
console.log(resto5);
var resto2 = parseInt(((((x%100)%50%20)%10)%5)/2);
console.log(resto2);
var restoMoeda25 = parseInt((((((x%100)%50%20)%10)%5)%2)/0.25);
console.log(restoMoeda25);
var restoMoeda10 = parseInt(((((((x%100)%50%20)%10)%5)%2)%0.25)/0.10);
console.log(restoMoeda10);
var restoMoeda001 = parseInt((((((((x%100)%50%20)%10)%5)%2)%0.25)%0.10)/0.01);
console.log(restoMoeda001);
