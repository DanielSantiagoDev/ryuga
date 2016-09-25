(function(){
	app.service('$resources',resources)
	//@ngInject//
	function resources($interval,_aux){
		var instance = this;
		console.log('resources',instance)

		instance.resources = {
			gems : {
				allowed  : false,
				cuantity : 0,
				ratio : 1,
				rares : {
					Rubí : {
						cuantity:0,
						ratio: 0.2
					},
					Zafiro : {
						cuantity:0,
						ratio: 0.1
					}
				},
				perMinut: 5
				cards : [
					{
						name :'Increase chance and ratio'
						rares : {
							Rubí : 2
						}
						ratio : 0.5
					},
				]
			}
		}

		var gemsPerMinut = 5;
		var interval;

		instance.getItemsPerMinut = function(item){
			if(!item){
				console.warn('NO ITEM!');
				return
			}
			var add = 0;
			for(var i in instance.resources[item].cards){
				add = add + instance.resources[item].cards[i].ratio || 0;
			}

			var value = gemsPerMinut * add;
			
			return value;
		};

		instance.rollRares = function(item,total){

			var items = instance.getItemsPerMinut(item);

			var output = {};
			for(var i in instance.resources[item].rares){
				
				var rareRatio = instance.resources[item].rares[i].ratio;

				for(var x in instance.resources[item].cards){
					if(instance.resources[item].cards[x].rares && instance.resources[item].cards[x].rares[i]){
						rareRatio = rareRatio + instance.resources[item].cards[x].rares[i];
					}
				}

				var rare = _aux.roll(rareRatio,items)
				output[i] = rare;

			}
			return output;
		}

		function initCount(){
			interval = $interval(function(){
				for(var i in instance.resources){
					if(instance.resources[i].allowed){
						var value = instance.getItemsPerMinut(i);
						var rares = instance.rollRares(i,value)
						for(var x in rares){
							instance.resources[i].rares[x].cuantity = instance.resources[i].rares[x].cuantity + rares[x];
						}
					}
				}
			},10000)
		};
	}
})();
