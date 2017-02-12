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
							tytul: '@',
							wywal: '&'
						}
				});
	
	KontrolerKomponentu.$inject = ['$scope']
	function KontrolerKomponentu ($scope)
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

			$ctrl.remove = function (myIndex) 
				{
			    	$ctrl.wywal({ index: myIndex });
				};

		}

	Kontroler.$inject = ['Serwis'];
	function Kontroler (Serwis)
		{
			var k = this;
			k.jedzenie = "";
			k.ilosc = "";
			k.lista = Serwis.przekaz ();
			k.wejscie = false;

			k.dodaj = function ()
				{
					var pozycja = {nazwa: k.jedzenie, ilosc: k.ilosc};
					k.wejscie = Serwis.sprawdz (pozycja);
					k.jedzenie = "";
					k.ilosc = "";
				};

			k.wywal = function (co)
				{
					Serwis.xxx (co);
				};
		}
	
	function Serwis ()
		{
			var s = this;
			s.menu = [
			{nazwa: "Lubię Paczeć", ilosc: "2015"},
			{nazwa: "Tego Jego", ilosc: "2014"},
			{nazwa: "Los Iwiczna Locos", ilosc: "2014"},
			{nazwa: "Gestapowski Płaszcz Życia", ilosc: "2017"},
			{nazwa: "Skrzydła z Tłuszczu", ilosc: "2017"},
			{nazwa: "Pogwałcono Prawa Me", ilosc: "2018"},
			{nazwa: "Dintojra", ilosc: "2018"},
			{nazwa: "Kiedy Idę Najebany (ulicami mego miasta w dzień)", ilosc: "2019"},
			{nazwa: "Eksmisja Komornicza", ilosc: "2019"},
			{nazwa: "Zimmmmmmno Mu", ilosc: "2019"}];

			s.sprawdz = function (co)
				{
					if (co.nazwa === "tegojego" && co.ilosc === "push")
					{
						return true;
					};
					else { return false };
				};

			s.przekaz = function ()
				{
					return s.menu;
				};

			s.xxx = function (co)
				{
					s.menu.splice (co, 1);
				}
		};

})();