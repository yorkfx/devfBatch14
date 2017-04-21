//IIFE
//Inmedialty invocation Function Expression
//

(function(){
	'use.strict';

	var helloComponent = {
		bindings: {
			country : "=",
			name : "=",
			number : "="
		},
		// template : '<h1>Hola Mundo</h1>'
		templateUrl : './app/components/helloComponent/helloComponent.html',
		controller: helloCtrl			
	};

	angular
		.module("myApp")
		.component("helloComponent", helloComponent)
		.controller("homeCtrl", homeCtrl);

	function homeCtrl(){
		var home = this;
		home.users = [
			{name: "Miguel", number: Math.random()},
			{name: "Juanito", number: Math.random()},
			{name: "Panchito", number: Math.random()},
		]
	}

	function helloCtrl(){
		var vm = this;
		vm.mx = true;
		vm.col = true;
	}
		
})();