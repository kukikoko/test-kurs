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
		nid.found = MenuSearchService.listOfMatchingItems;
		nid.check = function ()
			{
				MenuSearchService.GetMatchedMenuItems (nid.content);
				nid.content = "";
				console.log (nid.found);
			};
	};



MenuSearchService.$inject = ['$http']
function MenuSearchService ($http) 
{
	var mss = this;
	mss.listOfMatchingItems = new Array ();

	mss.GetMatchedMenuItems = function (content)
		{
			$http.get
			("https://davids-restaurant.herokuapp.com/menu_items.json")
 		.then
 		(function successCallback(response) {

		var allItems = response.data.menu_items;
		var matching = content.toLowerCase();

		for (var i = 0; i<allItems.length; i=i+1)
		{
			var description = allItems[i].description.toLowerCase();
			if (description.indexOf(matching) !== -1)
			{
				mss.listOfMatchingItems.push(allItems[i]);
			};
		};
		});
		};

};

function foundItems () {
	var ddo = 
		{
			scope:
				{
					found: '<',
				},
			templateUrl: 'shot.html'

		};


	return ddo;
};

})();