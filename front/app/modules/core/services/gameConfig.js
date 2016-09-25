(function(){
	app.service('gameConfig',gameConfig)
	//@ngInject//
	function gameConfig(gameLog){
		var instance = this;
		console.log('gameConfig',instance)

		instance.difficulty = 1;
	}
})();
