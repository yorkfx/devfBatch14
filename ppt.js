var decisionUsuario = 1;

var aleatorio = function() {
    var numero = Math.floor((Math.random() * 3) + 1);
    var respuesta;
    if (numero == 1) {
        respuesta = "Piedra";
    } else if (numero == 2) {
        respuesta = "Papel";
    } else {
        respuesta = "Tijera";
    }
    return respuesta;
};

var decisionOrdenador = aleatorio();
console.log("Usuario: " + decisionUsuario + ", Ordenador: " + decisionOrdenador);


function(decisionUsuario, decisionOrdenador) {
    if (decisionUsuario == decisionOrdenador) {
        return console.log("Empate, los dos eligieron " + decisionUsuario);
    } else {
        if (decisionUsuario == "Piedra" && decisionOrdenador == "Papel") {
            console.log("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el ordenador.");
        }
        if (decisionUsuario == "Piedra" && decisionOrdenador == "Tijera") {
            console.log("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el usuario");
        }
        if (decisionUsuario == "Papel" && decisionOrdenador == "Tijera") {
            console.log("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el ordenador.");
        }
        if (decisionUsuario == "Papel" && decisionOrdenador == "Piedra") {
            console.log("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el usuario");
        }
        if (decisionUsuario == "Tijera" && decisionOrdenador == "Piedra") {
            console.log("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el ordenador.");
        }
        if (decisionUsuario == "Tijera" && decisionOrdenador == "Papel") {
            console.log("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el usuario");
        }
    }
}
