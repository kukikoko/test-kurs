(function () {
	'use strict';

	angular.module('NarrowItDown', [])

	.controller('NarrowItDownController',
	 NarrowItDownController)
	.service ('MenuSearchService', MenuSearchService)
	.directive ('foundItems', foundItems);


	NarrowItDownController.$inject = 
	['MenuSearchService'];
	function NarrowItDownController (MenuSearchService)
	{
		var nid = this;
		nid.content = "";
		nid.found = new Array ();

		nid.check = function ()
			{
				nid.found = 
				MenuSearchService.GetMatchedMenuItems (nid.content);
			}
	};



MenuSearchService.$inject = ['$http']
function MenuSearchService ($http) 
{
	var mss = this;

	mss.GetMatchedMenuItems = function (content)
		{
			$http.get
			({
  			method: 'GET',
 			url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
 			})
 .then(function successCallback(response) {
	console.log (response);
	return response.data }
);
		}

};

function foundItems () {
	var ddo = 
		{
			scope:
				{
					found: '<'
				},
			templateUrl: 'shot.html',
			controller: kontrolaStrachu,
			controllerAs: 'strach',
			bindToController: true,
		};


	return ddo;
}
	






function kontrolaStrachu()
	{
		var strach = this;
		strach.czyzero = function () 
			{
				if (strach.mojaLista.list.length === 0)
					{	return true  }
				else {   return false  };
			};
	};


})();
