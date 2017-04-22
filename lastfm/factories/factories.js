(function(){
	'use strict';
	angular
		.module('spotifyApp')
		.factory('apiSpotify', apiSpotify);

	apiSpotify.$inject = ['$resource'];

	function apiSpotify($resource){
		return $resource('https://api.spotify.com/v1/search?q=:song&type=track&market=mx')
	};

})();