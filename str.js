var cadena = "Hola Mundo!";
var resultado = cadena.replace("!", "");



function escapeRegExp(string){
  return string.replace(/!/g, " ");
}

console.log(escapeRegExp("Hola mundo! ! ! ! !"));