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
				nid.status = MenuSearchService.status;

				if (nid.content !== "")
				{
				MenuSearchService.GetMatchedMenuItems (nid.content);
				nid.content = "";
				}
				else { nid.status = 2 };
			};

		nid.remove = function (i)
			{
				MenuSearchService.xld(i);
			};
	};



MenuSearchService.$inject = ['$http']
function MenuSearchService ($http) 
{
	var mss = this;
	mss.listOfMatchingItems = new Array ();
	mss.status = 0;

	mss.GetMatchedMenuItems = function (content)
		{
			$http.get
			("https://davids-restaurant.herokuapp.com/menu_items.json")
 		.then
 		(function successCallback(response) {
 		mss.listOfMatchingItems.splice(0,mss.listOfMatchingItems.length);
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
		if (mss.listOfMatchingItems.length === 0)
		{ mss.status = 1 };
		});
		};

	mss.xld = function (index)
		{
			mss.listOfMatchingItems.splice(index, 1);

		};
};

function foundItems () {
	var ddo = 
		{
			scope:
				{
					found: '<',
					remove: '&'
				},
			templateUrl: 'shot.html'

		};


	return ddo;
};

})();