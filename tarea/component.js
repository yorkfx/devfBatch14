(function(){
	'use strict';

	var clashRoyale = {
		bindings:{
			category: "="
		},
		templateUrl : './component.html',
		controller : clashCtrl 
	};

	angular
		.module('clashApp')
		.component("clashRoyale", clashRoyale);

	clashCtrl.$inject = ["clashApi"];

	function clashCtrl(clashApi){
		
		var vm = this;

		console.log("hey")

		vm.$onInit = onInit;
		// vm.otherFun = function(){}
		function onInit(){

			vm.characters = null;

			// vm.apiData = clashApi.get()
			// 	.$promise
			// 	.then(function(response){
			// 		// console.log(response);
			// 		vm.characters = response.results
			// 	});

			vm.apiData = clashApi.get({
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