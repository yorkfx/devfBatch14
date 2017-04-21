function palindromo(palabra){
    return palabra == palabra.split(' ').reverse().join('');	
}

var palabra_checa = 'Sobreverbos';

if(palindromo(palabra_checa)){
	console.log(palabra_checa + ' es Palíndromo');
}
else{
	console.log(palabra_checa + ' no es Palíndromo');
}