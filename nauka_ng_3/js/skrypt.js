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
				nid.content = "";
			};
	};



MenuSearchService.$inject = ['$http']
function MenuSearchService ($http) 
{
	var mss = this;


	mss.GetMatchedMenuItems = function (content)
		{
			$http.get
			("https://davids-restaurant.herokuapp.com/menu_items.json")
 		.then
 		(function successCallback(response) {

		var matchedItems = new Array ();
		var allItems = response.data.menu_items;
		var matching = content.toLowerCase();

		for (var i = 0; i<allItems.length; i=i+1)
		{
			var description = allItems[i].description.toLowerCase();
			if (description.indexOf(matching) !== -1)
			{
				matchedItems.push(allItems[i])
			};
		};
		return matchedItems;
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