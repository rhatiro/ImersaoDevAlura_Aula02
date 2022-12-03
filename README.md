# Conversor de moedas, distâncias e temperaturas

### Screenshot

![Screenshot](screenshot.png)

https://imersao.dev/aulas/aula02-conversor-moedas

### Conteúdo detalhado desta aula:

- Interagir com usuário para receber os preços a serem convertidos;
- Criar a lógica para saber como converter;
- Utilizar funções que interagem com a tela;
- Exibir o resultado na tela com innerHTML.

### Desafios desta aula!

- [x] Adicionar outras moedas para converter;
```js
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
```

- [ ] Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra;
```js
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
```

- [x] Conversor de temperaturas entre farenheit, kelvin e celcius;
```js
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
```

- [x] Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
```js
document.querySelector("#realParaBtc").innerHTML = `O valor em reais convertido para bitcoins é de ${realParaBtc} BTC`;
```

A [Pen](https://codepen.io/rhatiro/pen/yLjONvy) by [rhatiro](https://codepen.io/rhatiro) on [CodePen](https://codepen.io).

[License](https://codepen.io/license/pen/yLjONvy).
