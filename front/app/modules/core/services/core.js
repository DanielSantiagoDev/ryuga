(function(){
	app.service('configLoader',configLoader)
	//@ngInject//
	function configLoader(){
		var instance = this;
		console.log('service',instance)
	}
})();
