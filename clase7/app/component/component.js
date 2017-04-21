(function(){
	'use strict'

	var hero = {
		templateUrl: "app/component/hero.html",
		controller: characterCtrl,
	}

	function characterCtrl(marvelData){
		var char = this;

		char.superheros = null;

		marvelData.get()
			.$promise
				.then(function(response){
					char.supeheros = response.data.results;
					console.log("hero");
				})
	}

	angular
		.module('marvel')
		.component('hero', hero);
})();