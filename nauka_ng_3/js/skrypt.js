(function () {
	'use strict';

	angular.module('ShoppingListCheckoff', [])

	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.controller('DodawanieZakupow', DodawanieZakupow)
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

	DodawanieZakupow.$inject = ['Checking'];
	function DodawanieZakupow (Checking)
	{
		var pyk = this;
		pyk.co ="";
		pyk.ile = "";
		pyk.wpisz = function ()
			{
				Checking.dodaj (pyk.co, pyk.ile);
			};
	}

function Checking () {
	var sr = this;
	sr.listOfThingsToBuy = new Array ();
	
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

sr.dodaj = function (co, ile)
	{
		var pozycja = {
			name: co,
			quantity: ile
		};

		sr.listOfThingsToBuy.push(pozycja);
	}

};

function sodomTag () {
	var ddo = 
		{
			scope:
				{
					mojaLista: '=mojaLista',
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
				if (strach.mojaLista.list.length === 0)
					{	return true  }
				else {   return false  };
			};
	};


})();
