(function () {
	'use strict';

	angular.module('ShoppingListCheckoff', [])

	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service ('Checking', Checking)
	.directive ('sodomTag', sodomTag);


	ToBuyController.$inject = ['Checking'];
	function ToBuyController (Checking)
	{
		var tobuy = this;
		tobuy.list = Checking.listOfThingsToBuy;

		tobuy.gotit = function (which) {
			Checking.change (which, 1);
		};
	};

	AlreadyBoughtController.$inject = ['Checking'];
	function AlreadyBoughtController (Checking)
	{
		var bought = this;
		bought.list = Checking.listOfBoughtThings;

		bought.gotit = function (which)
			{
			Checking.change (which, 2);
			};
	};

function Checking () {
	var sr = this;
	sr.listOfThingsToBuy = new Array ();
	sr.listOfThingsToBuy[0] = {name: "beers", quantity: 10};
	sr.listOfThingsToBuy[1] = {name: "hamburgers", quantity: 3};
	sr.listOfThingsToBuy[2] = {name: "carrots", quantity: 8};
	sr.listOfThingsToBuy[3] = {name: "cars", quantity: 2};
	sr.listOfThingsToBuy[4] = {name: "flowers", quantity: 13};
	sr.listOfThingsToBuy[5] = {name: "plums", quantity: 3};
	sr.listOfThingsToBuy[6] = {name: "buckets", quantity: 4};

	sr.listOfBoughtThings = new Array ();

sr.change = function (number, kierunek)
	{
	if (kierunek===1)
		{
		sr.listOfBoughtThings.push(sr.listOfThingsToBuy[number]);
		sr.listOfThingsToBuy.splice (number, 1);
		}
	else {
		sr.listOfThingsToBuy.push(sr.listOfBoughtThings[number]);
		sr.listOfBoughtThings.splice (number, 1);
		};
	}
};

function sodomTag () {
	var ddo = 
		{
			scope:
				{
					mojaLista: '<',
					title: '@'
				},
			templateUrl: 'shot.html',
			controller: kontrolaStrachu,
			controllerAs: 'strach',
			bindToController: true
		};


	return ddo;
}
	
function kontrolaStrachu()
	{
		var strach = this;
		strach.czyzero = function () 
			{
				mojaLista.length === 0;
			};
	};


})();
