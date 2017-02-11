(function () {
	'use strict';

	angular.module('Aplikacja', [])
	.controller('Kontroler', Kontroler)
	.service ('Serwis', Serwis)
	.component ('mojKomponent', 
		{
			templateUrl: 'ins1.html',
			controller: KontrolerKomponentu,
			bindings:
				{
					jedzonko: '<',
					tytul: '@',
					wypierdol: '&'
				}
		});


	function KontrolerKomponentu ()
		{
			var $ctrl = this;



			$ctrl.$onInit = function ()
				{
					console.log ("ON INIT");
				};

			$ctrl.$onChanges = function (changeObj)
				{
					console.log (changeObj);
					console.log ("co sie zmienilo");
				};
		};


	Kontroler.$inject = 
	['Serwis'];
	function Kontroler (Serwis)
	{
		var knt = this;
		knt.pozycja = "";
		knt.ilosc = "";
		knt.l = Serwis.menu;

		knt.dodaj = function ()
			{
				Serwis.wpisz (knt.pozycja, knt.ilosc);
				knt.pozycja = "";
				knt.ilosc = "";
				console.log (knt.l);
				console.log (knt.l.length);
			};

		knt.skasuj = function (co)
			{
				Serwis.xxx (co);
			};

	};




function Serwis () 
{
	var srw = this;
	srw.menu = new Array ();

	srw.wpisz = function (co, ile)
		{
			var pozycja = {
				nazwa: co,
				ilosc: ile
			};

			if (co != "")
				{
					srw.menu.push (pozycja);
				};
		};

	srw.xxx = function (co)
		{
			srw.menu.splice (co, 1);
		};
};



})();
