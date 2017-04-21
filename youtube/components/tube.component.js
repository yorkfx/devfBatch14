//IIFE
//Inmedialty invocation Function Expression
//

(function(){
	'use.strict';

	var tubePlayer = {
		bindings: {
			id : "="
		},
		templateUrl : "./components/tube.html",
		controller: youCtrl			
	};
	
	angular
		.module("player")
		.component("tubePlayer", tubePlayer);

	youCtrl.inject = ["$sce"];
	function youCtrl($sce){
		var tube = this;

		tube.myUrl = "https://www.youtube.com/embed/";

		tube.trustUrl = function(){
			return $sce.trustAsResourceUrl(tube.myUrl+tube.id)
		}
	
	}

		
})();