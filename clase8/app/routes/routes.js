(function(){
	'use strict';
	angular
		.module('swApp')
		.config(config);

	config.$inject = ["$routeProvider", "$locationProvider"];

	function config($routeProvider, $locationProvider){
		$routeProvider
		.when('/arrows',{
			template : `<star-wars category="'arrows'"></star-wars>`
		})
		.when('/bomber',{
			template : `<star-wars category="'bomber'"></star-wars>`
		})
		.when('/archers',{
			template : `<star-wars category="'archers'"></star-wars>`
		})
		.when('/knight',{
			template : `<star-wars category="'knight'"></star-wars>`
		})
		.when('/fireball',{
			template : `<star-wars category="'fireball'"></star-wars>`
		})
		.otherwise({
			redirectTo : '/arrows'
		});

		$locationProvider.html5Mode(true);
	}
	
})();