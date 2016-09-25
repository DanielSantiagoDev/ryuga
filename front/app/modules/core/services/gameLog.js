(function(){
	app.service('gameLog',gameLog)
	//@ngInject//
	function gameLog(){
		var instance = this;
		

		instance.combatLog = function(text){
			console.info(text)
		}
	}
})();
