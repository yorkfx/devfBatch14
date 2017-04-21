(function(){
	'use strict';
	angular
		.module('clashApp')
		.config(config);

	config.$inject = ["$routeProvider", "$locationProvider"];

	function config($routeProvider, $locationProvider){
		$routeProvider
		.when('/arrows',{
			template : `<clash-royale category="'arrows'"></clash-royale>`
		})
		.when('/bomber',{
			template : `<clash-royale category="'bomber'"></clash-royale>`
		})
		.when('/archers',{
			template : `<clash-royale category="'archers'"></clash-royale>`
		})
		.when('/knight',{
			template : `<clash-royale category="'knight'"></clash-royale>`
		})
		.when('/fireball',{
			template : `<clash-royale category="'fireball'"></clash-royale>`
		})
		.otherwise({
			redirectTo : '/'
		});

		$locationProvider.html5Mode(true);
	}
	
})();