(function () {
	'use strict';

	angular.module('Aplikacja', [])
	.controller('Kontroler', Kontroler)
	.service ('Serwis', Serwis)
	.component ('komponent', 
		{
			templateUrl: 'ins1.html',
			controller: KontrolerKomponentu,
			bindings:
						{
							rzeczy: '<',
							tytul: '@'
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
					console.log ("changes: ",changeObj);
				}
		}

	Kontroler.$inject = ['Serwis'];
	function Kontroler (Serwis)
		{
			var k = this;
			k.jedzenie = "";
			k.ilosc = "";

			k.lista = Serwis.przekaz();

			k.dodaj = function ()
				{
					var pozycja = {nazwa: k.jedzenie, ilosc: k.ilosc};
					Serwis.dodaj (pozycja);
					k.jedzenie = "";
					k.ilosc = "";
				};
		}
	
	function Serwis ()
		{
			var s = this;
			s.menu = new Array ();


			s.dodaj = function (co)
				{
					if (co.nazwa != "")
					{
						s.menu.push (co);
					};
				};

			s.przekaz = function ()
				{
					return s.menu;
				};
		};

})();