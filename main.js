var num1 = prompt("Ingrese un numero entero mayor a cero: ");
var num2 = prompt("Ingrese un segundo numero mayor a cero: ");

var suma = parseInt(num1) + parseInt(num2);
var resta = parseInt(num1) - parseInt(num2);
var multiplicacion = parseInt(num1) * parseInt(num2);
var division = parseInt(num1) / parseInt(num2);
var modulo = parseInt(num1) % parseInt(num2);

document.write("El resultado de la suma de los numeros " + num1 + " y " + num2 + " es: " + suma + " . <br>");

document.write("El resultado de la resta de los numeros " + num1 + " y " + num2 + " es: " + resta + " . <br>" );

document.write("El resultado de la multiplicacion de los numeros " + num1 + " y " + num2 + " es: " + multiplicacion + " . <br>");

document.write("El resultado de la division de los numeros " + num1 + " y " + num2 + " es: " + division + " . <br>");

document.write("El resultado del modulo de los numeros " + num1 + " y " + num2 + " es: " + modulo + " . <br>");

// Segundo requerimiento finalizado

var Celsius = prompt("Ingrese la temperatura a convertir en grados Celsius")

var kelvin = (parseInt(Celsius) + 273.15);
var Fahrenheit = (parseInt(Celsius * 9 / 5) + 32);

document.write("El equivalente en grados Fahrenheit es de " + Fahrenheit + " y en grados Kelvin es " + kelvin + "<br>")

// Tercer Requerimiento finalizado


var usuadias = prompt("Ingrese una cantidad de dias.");

//cantidad de año(s)
var year = (Math.floor(usuadias / 365));
//cantidad de semana luego de saber cuantos año(s) son
var week = (Math.floor((usuadias % 365) / 7));
//cantidad de dias que sobran al calcular el numero de año(s) y semana(s)
var day = (Math.floor((usuadias % 365) % 7));

//Concatenacion para mostrar la cantidad de año(s), semana(s) y dia(s), con respecto a los dias ingresados
document.write(usuadias + "  dias equivalen a: " + year + " año(s), " + week + " semana(s) y " + day + " dia(s)" + "<br>");


// Cuarto Requerimiento finalizado 


var numero1 = prompt("Ingrese primer numero")
var numero2 = prompt("Ingrese segundo numero")
var numero3 = prompt("Ingrese tercer numero")
var numero4 = prompt("Ingrese cuarto numero")
var numero5 = prompt("Ingrese quinto numero")


var suma = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) + parseInt(numero4) + parseInt(numero5);
var promedio = (suma / 5);

// se muestra el resultado de la suma de las variables y el promedio
document.write("La suma de los numeros ingresados es :" + suma + " y el promedio corresponde a : " + promedio)

// Quinto requerimiento y Final.




