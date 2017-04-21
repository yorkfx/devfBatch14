function palindromo(palabra){
    return palabra == palabra.split(' ').reverse().join('');	
}

var palabra_checa = 'rever';

if(palindromo(palabra_checa)){
	console.log(palabra_checa + ' es Palindromo');
}
else{
	console.log(palabra_checa + ' no es Palindromo');
}