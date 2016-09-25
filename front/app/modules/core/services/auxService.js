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
})();
