//Feito por Jonathas Veras; Data: 27/3/2019.

var precoFabrica, percentualDistribuidor, percentualImposto, lucroDistribuidor, imposto;
precoFabrica = parseFloat("Coloque aqui o preco da Fabrica: ");
percentualDistribuidor = parseFloat("Percentual de lucro do distribuidor: ");
percentualImposto = parseFloat("Percentual de imposto: ");
lucroDistribuidor = precoFabrica*percentualDistribuidor/100;
imposto= precoFabrica*percentualImposto/100;
var precoTotal = lucroDistribuidor+imposto+precoFabrica;
console.log("Lucro do distribuidor: " + lucroDistribuidor + "\n");
console.log("Impostos: " + imposto + "\n");
console.log("Preco total: " + precoTotal);
