(function(){
	'use strict';

	var starWars = {
		bindings:{
			category: "="
		},
		templateUrl : './app/components/starWarsComponent/starWars.component.html',
		controller : starCtrl 
	};

	angular
		.module('swApp')
		.component("starWars", starWars);

	starCtrl.$inject = ["starApi"];

	function starCtrl(starApi){
		var vm = this;
		console.log("hey")

		vm.$onInit = onInit;
		// vm.otherFun = function(){}
		function onInit(){

			vm.characters = null;

			// vm.apiData = starApi.get()
			// 	.$promise
			// 	.then(function(response){
			// 		// console.log(response);
			// 		vm.characters = response.results
			// 	});

			vm.apiData = starApi.get({
				category : vm.category
			})
				.$promise
				.then(function(response){
					// console.log(response);
					vm.characters = response.results
				});
		}
	}

})();