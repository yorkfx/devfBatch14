(function(){
	'use strict';

	var spotify = {
		templateUrl: './app/components/player.component.html',
		controller: spotifyCtrl
	};

	angular
		.module('spotifyApp')
		.component('spotifyPlayer', spotify);

	spotifyCtrl.$inject = ['apiSpotify'];
	function spotifyCtrl(apiSpotify) {
		var vm = this;
		vm.playlist = null;
		vm.song = null;
		vm.audio = new Audio;
		vm.play = play;
		vm.search = doSearch;

		function play(song) {
			vm.song = song;
			vm.audio.src = song.preview_url; 
			vm.audio.pause();
			vm.audio.play();
		}
		function doSearch() {
			vm.apiData = apiSpotify.get({
				song: vm.song_name
			}).$promise.then(function (response) {
				vm.playlist = response.tracks.item;
				console.log(vm.playlist)
				// body...
			})
		}
	}
})();