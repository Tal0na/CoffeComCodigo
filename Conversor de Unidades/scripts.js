function converterTemperatura() {

  var celsius = parseFloat(document.getElementById('celsius').value);


  var fahrenheit = (celsius * 9/5) + 32;


  document.getElementById('resultado').innerHTML = `${celsius} graus Celsius são ${fahrenheit.toFixed(2)} graus Fahrenheit.`;
}