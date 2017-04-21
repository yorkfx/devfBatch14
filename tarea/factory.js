(function(){
	'use strict';
	angular
		.module('clashApp')
		.factory("clashApi", clashApi);

	clashApi.$inject = ["$resource"];
	function clashApi($resource){
		// return $resource('http://swapi.co/api/people')
		return $resource('http://www.clashapi.xyz/api/cards/:id')
	}

})();