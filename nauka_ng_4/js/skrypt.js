(function () {
	'use strict';

	angular.module('Aplikacja', [])
	.controller('Kontroler', Kontroler)
	.service ('Serwis', Serwis)
	.component ('mojKomponent', 
		{
			templateUrl: 'ins1.html',
			controller: KontrolerKomponentu,
			controllerAs: '$ctrl',
			bindings:
				{
					znalezione: '<',
					mojTytul: '@tytul',
					wywalTo: '&'
				}
		});


	function KontrolerKomponentu ()
		{
			$ctrl = this;
		}


	Kontroler.$inject = 
	['Serwis'];
	function Kontroler (Serwis)
	{
		var knt = this;
		knt.pozycja = "";
		knt.ilosc = "";
		knt.lista = Serwis.menu;

		knt.dodaj = function ()
			{
				Serwis.wpisz (knt.pozycja, knt.ilosc);
				knt.pozycja = "";
				knt.ilosc = "";
				console.log (knt.lista);
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

};



})();
