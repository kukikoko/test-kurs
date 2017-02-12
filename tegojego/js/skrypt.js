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
	
	KontrolerKomponentu.$inject = ['$scope', '$element']
	function KontrolerKomponentu ($scope, $element)
		{
			var $ctrl = this;
			var wyswietlamy;
			$ctrl.ListaZapasowa = [];
			$ctrl.cena = 0;


			$ctrl.reseta = function ()
				{
					console.log ("A HUJA TAM!");
					$ctrl.ListaZapasowa.length = 0;
					for (i=0; i<$ctrl.rzeczy.length; i++)
					{
						$ctrl.ListaZapasowa.push($ctrl.rzeczy[i]);
					}
					wyswietlamy = 1;
				};


			$ctrl.zamow = function ()
				{
					if ($ctrl.ListaZapasowa.length > 0)
					{
					var sumowanie = 0;
					for (var i=0; i<$ctrl.ListaZapasowa.length; i=i+1)
						{
							sumowanie =
							sumowanie+$ctrl.ListaZapasowa[i].cena;
						};
					$ctrl.cena = sumowanie;
					wyswietlamy = 2;
					}
					else
					{ wyswietlamy = 3; };
				};

			$ctrl.$onInit = function ()
				{
					console.log ("ON INIT");
					$ctrl.reseta ();
				};

			$ctrl.$onChanges = function (changeObj)
				{
					console.log ("changes: ",changeObj);
				}

			$ctrl.won = function (co)
				{
					$ctrl.ListaZapasowa.splice(co, 1);
				}

			$ctrl.remove = function (myIndex) 
				{
			    	$ctrl.wywal({ index: myIndex });
				};


			$ctrl.$doCheck = function ()
				{
					if (wyswietlamy === 2)
							{
								var Elem1 =	$element.find('.zamowienie');
								var Elem2 = $element.find('.guziczek');
								var Elem3 = $element.find('.blad');
								Elem1.slideDown(900);
								Elem2.slideUp(900);
								Elem3.slideUp(900);
							}
					else
					{
					if (wyswietlamy === 1)
							{
								var Elem1 =	$element.find('.zamowienie');
								var Elem2 = $element.find('.guziczek');
								var Elem3 = $element.find('.blad');
								Elem1.slideUp(900);
								Elem2.slideDown(900);
								Elem3.slideUp(900);
							}
					else 
							{
								var Elem1 =	$element.find('.zamowienie');
								var Elem2 = $element.find('.guziczek');
								var Elem3 = $element.find('.blad');
								Elem1.slideUp(900);
								Elem2.slideUp(900);
								Elem3.slideDown(900);
							};
					};
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
			{nazwa: "Lubię Paczeć", ilosc: "2015", cena: 3.40},
			{nazwa: "Tego Jego", ilosc: "2014", cena: 3.22},
			{nazwa: "Los Iwiczna Locos", ilosc: "2014", cena: 2.89},
			{nazwa: "Gestapowski Płaszcz Życia", ilosc: "2017", cena: 4.43},
			{nazwa: "Skrzydła z Tłuszczu", ilosc: "2017", cena: 3.99},
			{nazwa: "Pogwałcono Prawa Me", ilosc: "2018", cena: 1.87},
			{nazwa: "Dintojra", ilosc: "2018", cena: 2.33},
			{nazwa: "Kiedy Idę Najebany (ulicami mego miasta w dzień)", ilosc: "2019", cena: 5.23},
			{nazwa: "Eksmisja Komornicza", ilosc: "2019", cena: 3.43},
			{nazwa: "Zimmmmmmno Mu", ilosc: "2019", cena: 2.97},
			{nazwa: "Krójże Mnie Tasakiem Losu", ilosc: "2020", cena: 8.32}];

			s.sprawdz = function (co)
				{
					if (co.nazwa === "tegojego" && co.ilosc === "push")
					{
						return true;
					}
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