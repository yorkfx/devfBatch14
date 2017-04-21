(function(){
	'use strict';

	var spotify = {
		templateUrl: './app/components/component.html',
		controller: spotifyCtrl
	}
	angular
		.module('spotifyApp')
		.component("spotify", spotify);

	spotifyCtrl.$inject = ["spotifyApiTracks"];

	function spotifyCtrl(spotifyApiTracks){
		var vm = this;

		vm.$onInit = onInit;

		function onInit(){

			vm.tracks = null;
			vm.artists = null;

			vm.apiData = spotifyApiTracks.get().$promise
				.then(function(response){
					vm.tracks = response.tracks
					console.log(vm.tracks)
				});

			// vm.apiData2 = spotifyApiArtists.get()
			// 	.$promise
			// 	.then(function(response){
			// 		vm.artists = response.results
			// 	});

		}
	}

})();