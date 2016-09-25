(function(){
	app.service('$player',configLoader)
	//@ngInject//
	function configLoader(gameLog){
		var instance = this;
		console.log('servicePLayer',instance)

		instance.hp = 100;

		instance.stats = {
			fortaleza: 10,
			intel : 10,
			fuerza : 10,
			agilidad : 10
		}

		instance.reduceDamage = {
			shield : function(attack){

			}
		}
	}
})();
