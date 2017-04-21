(function(){
	'use strict';
	angular
		.module('swApp')
		.factory("starApi", starApi);

	starApi.$inject = ["$resource"];
	function starApi($resource){
		// return $resource('http://swapi.co/api/people')
		return $resource('http://www.clashapi.xyz/api/cards/:id')
	}

})();