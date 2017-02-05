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




function MenuSearchService () 
{
	var mss = this;

	mss.GetMatchedMenuItems = function (content)
		{
			$http({
  					method: 'GET',
 					url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
}).then(function successCallback(response) {
	console.log (response);
	return response.data }
, function errorCallback(response) {
    console.log ("cos sie zesralo")
  });
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
	

function funkcjaLinku (scope, element, attrs, contoller)
	{
		scope.$watch ('strach.czyzero()',
			function (newValue, oldValue)
			{

				if (newValue === true)
				{
					jest ();
				}
				else
				{
					niema ();
				}
			});

		function jest ()
		{
			var warningElem = element.find("p");
			warningElem.slideDown(900);
		};

		function niema ()
		{
			var warningElem = element.find("p");
			warningElem.slideUp(900);
		};
	};




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
