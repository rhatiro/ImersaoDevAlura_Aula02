var dolar = 5.21;
var euro = 5.25;
var bitcoin = 106908.76;

function Converter() {
  let input = document.querySelector("#valor").value;
  let realParaDolar = (input / dolar).toFixed(2);
  let realParaEuro = (input / euro).toFixed(2);
  let realParaBtc = input / bitcoin;
  document.querySelector(
    "#realParaDolar"
  ).innerHTML = `O valor em reais convertido para dólar é de U$ ${realParaDolar}`;
  document.querySelector(
    "#realParaEuro"
  ).innerHTML = `O valor em reais convertido para euro é de ${realParaEuro} €`;
  document.querySelector(
    "#realParaBtc"
  ).innerHTML = `O valor em reais convertido para bitcoins é de ${realParaBtc} BTC`;
}

function viajar() {
  const anoLuz = 9460536068.016; //km
  var inputKm = +document.querySelector("#km").value;
  var dur = (inputKm / anoLuz).toFixed();
  var resultado = document.querySelector("#resultado");
  if (dur > 1) {
    resultado.innerHTML = `O tempo de duração é de ${dur} anos.`;
  } else if (dur == 1) {
    resultado.innerHTML = `O tempo de duração é de ${dur} ano.`;
  } else resultado.innerHTML = `O tempo de duração é de menos de um ano.`;
}

// Conversor de temperaturas

var farenheit = document.querySelector("#f");
var kelvin = document.querySelector("#k");
var celcius = document.querySelector("#c");

function converterFarenheit() {
  if (farenheit.value != "") {
    kelvin.value = (((farenheit.value - 32) * 5) / 9 + 273.15).toFixed(1);
    celcius.value = ((farenheit.value - 32) / 1.8).toFixed(1);
  } else {
    kelvin.value = "";
    celcius.value = "";
  }
}

function converterKelvin() {
  if (kelvin.value != "") {
    farenheit.value = (((kelvin.value - 273.15) * 9) / 5 + 32).toFixed(1);
    celcius.value = (kelvin.value - 273.15).toFixed(1);
  } else {
    farenheit.value = "";
    celcius.value = "";
  }
}

function converterCelcius() {
  if (celcius.value != "") {
    farenheit.value = (celcius.value * 1.8 + 32).toFixed(1);
    kelvin.value = (+celcius.value + 273.15).toFixed(1);
  } else {
    farenheit.value = "";
    kelvin.value = "";
  }
}

farenheit.addEventListener("keyup", converterFarenheit);
kelvin.addEventListener("keyup", converterKelvin);
celcius.addEventListener("keyup", converterCelcius);
