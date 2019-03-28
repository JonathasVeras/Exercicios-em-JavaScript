//Feito por Jonathas Veras; Data: 27/3/2019.

var segundos, horas, minutos, segundosSaida;
segundos = parseFloat();
horas = parseInt(segundos/3600);
minutos = parseInt((segundos%3600)/60);
segundosSaida = ((segundos%3600)%60);
console.log(horas +"h " + minutos + "min " + segundosSaida + "s" );
