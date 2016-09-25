var app = angular.module('webGame',['ngMaterial']);

(function(){
	app.controller('masterController',masterController)

	//@ngInject//
	function masterController($player,gameConfig){
		console.log('master4324432',$player,gameConfig);

	}
	masterController.$inject = ["$player", "gameConfig"];

})();
(function(){
	app.service('_aux',_aux)
	//@ngInject//
	function _aux(gameLog){
		var instance = this;
		console.log('_aux',instance)

		instance.roll = function(ratio,times){
			var count = 0;

			for(var i = 0;i<times;i++){
				var picked = Math.floor((Math.random() * 1000) + 1);
				if(picked <= (ratio * 100)){
					count ++
				}
			}
			return count;
		};
	}
	_aux.$inject = ["gameLog"];
})();

(function(){
	app.service('configLoader',configLoader)
	//@ngInject//
	function configLoader(){
		var instance = this;
		console.log('service',instance)
	}
})();

(function(){
	app.service('gameConfig',gameConfig)
	//@ngInject//
	function gameConfig(gameLog){
		var instance = this;
		console.log('gameConfig',instance)

		instance.difficulty = 1;
	}
	gameConfig.$inject = ["gameLog"];
})();

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
	configLoader.$inject = ["gameLog"];
})();

console.warn('herrofdsfds');
