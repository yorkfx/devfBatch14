(function(){
	'use strict';
	angular
		.module('spotifyApp')
		//.factory("spotifyApiTracks", spotifyApiTracks)
		.factory("spotifyApiTracks", spotifyApiTracks);

	spotifyApiTracks.$inject = ["$resource"];
	function spotifyApiTracks($resource){
		return $resource('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=6159553481342532dc9453ce3584f850&format=json')
	};

	// spotifyApiArtists.$inject = ["$resource"];
	// function spotifyApiArtists($resource){
	// 	return $resource('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=6159553481342532dc9453ce3584f850&format=json')
	// }

})();